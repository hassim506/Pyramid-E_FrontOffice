import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LightGallery } from 'lightgallery/lightgallery';
import { LightGallerySettings } from 'lightgallery/lg-settings';
import { routes } from '../../../shared/service/routes/routes';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; 
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';
import { FormsModule } from '@angular/forms';
import { FormationService } from '../../../shared/service/formation/formation.service';
import { AuthService } from '../../../shared/service/authentification/auth.service';
import { Subject, takeUntil } from 'rxjs';
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';

const STORAGE_BASE = environment.apiUrl.replace(/\/api$/, '') + '/storage';

@Component({
  selector: 'app-course-details',
  imports: [CommonModule, RouterLink, LightgalleryModule, FormsModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  routes = routes;
  
  // Data properties
  formation: any = null;
  loading = false;
  error = '';
  success = '';
  
  // Calculated properties
  totalSections = 0;
  totalDuration = 0;
  averageRating = 0;
  
  // User state
  currentUser: any = null;
  
  // Comment form
  newComment = {
    nom: '',
    email: '',
    sujet: '',
    commentaire: '',
    note: 5
  };
  submittingComment = false;
  
  // Related courses
  relatedCourses: any[] = [];
  
  // LightGallery configuration
  settings: Partial<LightGallerySettings> = {
    counter: false,
    download: false,
    selector: '.lg-item',
    plugins: [],
    licenseKey: 'your_license_key'
  };
  
  // Private properties
  private lightGallery!: LightGallery;
  private formationId: number| null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formationService: FormationService,
    private authService: AuthService,
    private location: Location,
        private sanitizer: DomSanitizer 

  ) {}

  ngOnInit(): void {
    // Initialize AOS
    Aos.init({ 
      duration: 1200, 
      once: true,
      disable: 'mobile' 
    });
    
    // Get current user if authenticated
    this.currentUser = this.authService.getUser();
    if (this.currentUser) {
      this.newComment.nom = this.currentUser.nom || this.currentUser.name || '';
      this.newComment.email = this.currentUser.email || '';
    }
    
    // Subscribe to route params changes
    this.route.paramMap.pipe(
      takeUntil(this.destroy$)
    ).subscribe(params => {
      this.formationId = params.get('id') ? parseInt(params.get('id')!, 10) : null;
      if (this.formationId) {
        this.loadFormation();
      } else {
        this.error = 'ID de formation manquant';
        this.router.navigate(['/courses']);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;
  };

  // ================================
  // LOADING AND DATA METHODS
  // ================================

  private loadFormation(): void {
    if (!this.formationId) return;
    
    this.loading = true;
    this.error = '';

    this.formationService.getFormationById(this.formationId).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
     next: (response) => {
          this.formation = response.formation || response.data || response;
          this.processFormationData();
          this.loadRelatedCourses();
          this.loading = false;
          
          console.log('✅ Formation chargée:', this.formation);
          
          // AOS ne détecte pas les éléments ajoutés dynamiquement → refresh
          setTimeout(() => Aos.refresh(), 100);
      },
      error: (error) => {
        console.error('❌ Erreur lors du chargement de la formation:', error);
        this.handleLoadError(error);
      }
    });
  }

  private processFormationData(): void {
    if (!this.formation) return;

    // Calculate totals
    this.calculateTotalSections();
    this.calculateTotalDuration();
    this.calculateAverageRating();
    
    // Process tags if they're a string
    if (typeof this.formation.tags === 'string') {
      try {
        this.formation.tags = JSON.parse(this.formation.tags);
      } catch {
        this.formation.tags = this.formation.tags.split(',').map((tag: string) => tag.trim());
      }
    }

    // Process competences if they're a string
    if (typeof this.formation.competences_acquises === 'string') {
      try {
        this.formation.competences_acquises = JSON.parse(this.formation.competences_acquises);
      } catch {
        this.formation.competences_acquises = [];
      }
    }

    // Process outils if they're a string
    if (typeof this.formation.outils_requis === 'string') {
      try {
        this.formation.outils_requis = JSON.parse(this.formation.outils_requis);
      } catch {
        this.formation.outils_requis = [];
      }
    }
    
    // Ensure arrays exist
    this.formation.modules = this.formation.modules || [];
    this.formation.faqs = this.formation.faqs || [];
    this.formation.avis = this.formation.avis || [];
    
    // Process image URL
    if (this.formation.image_couverture && !this.formation.image_couverture.startsWith('http')) {
      this.formation.image_couverture = `${STORAGE_BASE}/${this.formation.image_couverture}`;
    }

    // Process formateur avatar
    if (this.formation.formateur?.avatar && !this.formation.formateur.avatar.startsWith('http')) {
      this.formation.formateur.avatar = `${STORAGE_BASE}/${this.formation.formateur.avatar}`;
    }
  }

  private calculateTotalSections(): void {
    if (!this.formation?.modules) {
      this.totalSections = 0;
      return;
    }

    this.totalSections = this.formation.modules.reduce((total: number, module: any) => {
      return total + (module.sections?.length || 0);
    }, 0);
  }


  private calculateTotalDuration(): void {
    if (!this.formation?.modules) {
      this.totalDuration = 0;
      return;
    }


    this.totalDuration = this.formation.modules.reduce((total: number, module: any) => {
      const moduleDuration = module.sections?.reduce((moduleTotal: number, section: any) => {
        return moduleTotal + (parseInt(section.duree_estimee) || 0);
      }, 0) || 0;
      return total + moduleDuration;
    }, 0);
  }

  private calculateAverageRating(): void {
    if (!this.formation?.avis || this.formation.avis.length === 0) {
      this.averageRating = 0;
      return;
    }

    const totalRating = this.formation.avis.reduce((sum: number, avis: any) => {
      return sum + (parseFloat(avis.note) || 0);
    }, 0);
    
    this.averageRating = Math.round((totalRating / this.formation.avis.length) * 10) / 10;
  }
parseToNumber(value: any): number {
  return parseInt(value) || 0;
}
  private loadRelatedCourses(): void {
    if (!this.formation?.formateur_id) {
      console.log('ℹ️ Aucun formateur spécifié pour charger les formations similaires');
      return;
    }

    // Charger les formations du même formateur
    this.formationService.getFormations({ page: 1, limit: 20 }).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (response) => {
        const allFormations = response.formations || response.data || [];
        
        // Filtrer par formateur et exclure la formation actuelle
        this.relatedCourses = allFormations
          .filter((f: any) => 
            f.formateur_id === this.formation.formateur_id && 
            f.id !== this.formation.id
          )
          .slice(0, 4);
          
        console.log('🔗 Formations du formateur chargées:', this.relatedCourses.length);
      },
      error: (error) => {
        console.log('ℹ️ Formations similaires non disponibles:', error);
        this.relatedCourses = [];
      }
    });
  }

  private handleLoadError(error: any): void {
    this.loading = false;
    
    if (error.status === 404) {
      this.error = 'Formation non trouvée';
    } else if (error.status === 403) {
      this.error = 'Accès non autorisé à cette formation';
    } else {
      this.error = 'Erreur lors du chargement de la formation';
    }
    
    console.error('❌ Erreur de chargement:', error);
    
    // Redirect after error display
    setTimeout(() => {
      this.router.navigate(['/courses']);
    }, 3000);
  }

  // ================================
  // HELPER METHODS FOR TEMPLATE
  // ================================

  formatDuration(minutes: number): string {
    if (!minutes || minutes === 0) return '0 min';
    
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    
    if (hours > 0) {
      return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
    }
    return `${mins}min`;
  }

  getStarsArray(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  getObjectifsList(objectifs: string): string[] {
    if (!objectifs) return [];
    return objectifs.split('\n')
      .map(obj => obj.replace(/^[-•*]\s*/, '').trim())
      .filter(obj => obj.length > 0);
  }

  getPrerequisList(prerequis: string): string[] {
    if (!prerequis) return [];
    return prerequis.split('\n')
      .map(pre => pre.replace(/^[-•*]\s*/, '').trim())
      .filter(pre => pre.length > 0);
  }

  getNiveauLabel(niveau: string): string {
    const niveaux: { [key: string]: string } = {
      'debutant': 'Débutant',
      'intermediaire': 'Intermédiaire',
      'avance': 'Avancé',
      'expert': 'Expert'
    };
    return niveaux[niveau] || niveau.charAt(0).toUpperCase() + niveau.slice(1);
  }

  getTypeLabel(type: string): string {
    const types: { [key: string]: string } = {
      'en_ligne': 'En ligne',
      'presentiel': 'Présentiel',
      'hybride': 'Hybride',
      'video': 'Vidéo',
      'hands-on': 'Pratique',
      'reading': 'Lecture',
      'quiz': 'Quiz'
    };
    return types[type] || type;
  }

  getSectionTypeIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'video': 'fas fa-play-circle',
      'hands-on': 'fas fa-hands-helping',
      'reading': 'fas fa-file-text',
      'quiz': 'fas fa-question-circle',
      'assignment': 'fas fa-tasks'
    };
    return icons[type] || 'fas fa-file';
  }

  getSectionTypeColor(type: string): string {
    const colors: { [key: string]: string } = {
      'video': 'text-primary',
      'hands-on': 'text-success',
      'reading': 'text-info',
      'quiz': 'text-warning',
      'assignment': 'text-danger'
    };
    return colors[type] || 'text-secondary';
  }

  calculateDiscount(prix: number, prixOriginal: number): number {
    if (!prixOriginal || prixOriginal <= prix) return 0;
    return Math.round(((prixOriginal - prix) / prixOriginal) * 100);
  }

  // ================================
  // USER ACTION METHODS
  // ================================

  // ================================
  // PREVIEW MODAL
  // ================================
  previewOpen = false;
  previewSection_: any = null;

  previewSection(section: any): void {
    this.previewSection_ = section;
    this.previewOpen = true;
  }

  closePreview(): void {
    this.previewOpen = false;
    this.previewSection_ = null;
  }

  resolveResourceUrl(raw: any): string {
    if (!raw) return '';
    if (typeof raw === 'string') return raw;
    if (Array.isArray(raw)) return this.resolveResourceUrl(raw[0]);
    if (typeof raw === 'object') return raw.url || raw.path || raw.src || raw.uri || '';
    return String(raw);
  }

  getPreviewResourceUrl(): string {
    const raw = this.previewSection_?.ressources;
    const url = this.resolveResourceUrl(raw);
    if (!url) return '';
    if (url.startsWith('http')) return url;
    return `${STORAGE_BASE}/${url}`;
  }

  getPreviewSafeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.getPreviewResourceUrl());
  }

  getPreviewYouTubeEmbedUrl(): SafeResourceUrl | null {
    const url = this.resolveResourceUrl(this.previewSection_?.ressources);
    const videoId = this.getYouTubeVideoId(url);
    if (!videoId) return null;
    const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&modestbranding=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  isPreviewYouTube(): boolean {
    const url = this.resolveResourceUrl(this.previewSection_?.ressources);
    return this.isYouTubeUrl(url);
  }

  hasPreviewResource(): boolean {
    return !!this.resolveResourceUrl(this.previewSection_?.ressources);
  }

  isPreviewViewableFile(): boolean {
    const url = this.resolveResourceUrl(this.previewSection_?.ressources);
    const ext = url.split('?')[0].split('.').pop()?.toLowerCase() || '';
    return ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'].includes(ext);
  }

  getPreviewFileViewerUrl(): SafeResourceUrl {
    const full = this.getPreviewResourceUrl();
    const ext = full.split('?')[0].split('.').pop()?.toLowerCase() || '';
    if (['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'].includes(ext)) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://docs.google.com/viewer?url=${encodeURIComponent(full)}&embedded=true`
      );
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(full);
  }

  shareFormation(): void {
    const url = window.location.href;
    const title = this.formation?.titre || 'Formation intéressante';
    const text = this.formation?.short_description || 'Découvrez cette formation';

    if (navigator.share) {
      navigator.share({
        title: title,
        text: text,
        url: url
      }).catch(() => {
        this.copyToClipboard(url);
      });
    } else {
      this.copyToClipboard(url);
    }
  }

  private copyToClipboard(text: string): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.success = 'Lien copié dans le presse-papier';
        setTimeout(() => this.success = '', 3000);
      }).catch(() => {
        this.fallbackCopyToClipboard(text);
      });
    } else {
      this.fallbackCopyToClipboard(text);
    }
  }

  private fallbackCopyToClipboard(text: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      this.success = 'Lien copié dans le presse-papier';
      setTimeout(() => this.success = '', 3000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
      this.error = 'Impossible de copier le lien';
      setTimeout(() => this.error = '', 3000);
    }
    
    document.body.removeChild(textArea);
  }

  // ================================
  // COMMENT METHODS
  // ================================

  submitComment(): void {
    if (!this.validateCommentForm()) {
      return;
    }

    this.submittingComment = true;
    this.error = '';

    const commentData = {
      formation_id: this.formation?.id,
      nom: this.newComment.nom.trim(),
      email: this.newComment.email.trim(),
      sujet: this.newComment.sujet.trim(),
      commentaire: this.newComment.commentaire.trim(),
      note: this.newComment.note || 5
    };

    // Simulation d'ajout de commentaire (à remplacer par l'appel API réel)
    this.simulateCommentSubmission(commentData);
  }

  private simulateCommentSubmission(commentData: any): void {
    setTimeout(() => {
      this.success = 'Commentaire enregistré avec succès !';
      this.resetCommentForm();
      this.submittingComment = false;
      
      // Add comment to local array for immediate display
      const newAvis = {
        ...commentData,
        created_at: new Date().toISOString(),
        id: Date.now()
      };
      
      if (!this.formation.avis) {
        this.formation.avis = [];
      }
      this.formation.avis.unshift(newAvis);
      this.calculateAverageRating();
      
      console.log('💬 Commentaire simulé ajouté:', commentData.sujet);
      setTimeout(() => this.success = '', 5000);
    }, 1000);
  }

  private validateCommentForm(): boolean {
    const { nom, email, sujet, commentaire } = this.newComment;
    
    if (!nom.trim()) {
      this.error = 'Le nom est obligatoire';
      setTimeout(() => this.error = '', 3000);
      return false;
    }
    
    if (!email.trim()) {
      this.error = 'L\'email est obligatoire';
      setTimeout(() => this.error = '', 3000);
      return false;
    }
    
    if (!this.isValidEmail(email)) {
      this.error = 'Format d\'email invalide';
      setTimeout(() => this.error = '', 3000);
      return false;
    }
    
    if (!sujet.trim()) {
      this.error = 'Le sujet est obligatoire';
      setTimeout(() => this.error = '', 3000);
      return false;
    }
    
    if (!commentaire.trim()) {
      this.error = 'Le commentaire est obligatoire';
      setTimeout(() => this.error = '', 3000);
      return false;
    }
    
    if (commentaire.trim().length < 10) {
      this.error = 'Le commentaire doit contenir au moins 10 caractères';
      setTimeout(() => this.error = '', 3000);
      return false;
    }
    
    return true;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private resetCommentForm(): void {
    this.newComment = {
      nom: this.currentUser?.nom || this.currentUser?.name || '',
      email: this.currentUser?.email || '',
      sujet: '',
      commentaire: '',
      note: 5
    };
  }

  setRating(rating: number): void {
    this.newComment.note = Math.max(1, Math.min(5, rating));
    console.log('⭐ Note sélectionnée:', this.newComment.note);
  }

  // ================================
  // UTILITY METHODS
  // ================================

  goBack(): void {
    this.location.back();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  trackByIndex(index: number, item: any): number {
    return item?.id || index;
  }

  // ================================
  // SOCIAL SHARING METHODS
  // ================================

  shareOnFacebook(): void {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    this.openShareWindow(shareUrl);
  }

  shareOnTwitter(): void {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(this.formation?.titre || '');
    const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    this.openShareWindow(shareUrl);
  }

  shareOnLinkedIn(): void {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(this.formation?.titre || '');
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`;
    this.openShareWindow(shareUrl);
  }

  private openShareWindow(url: string): void {
    const features = 'width=600,height=400,scrollbars=yes,resizable=yes,toolbar=no,location=no,menubar=no';
    window.open(url, 'share', features);
  }
getImageUrl(imageName: string | null | undefined): string {
  console.log('Image name received:', imageName);
  
  // Image par défaut si pas d'image fournie
  if (!imageName || imageName.trim() === '') {
    return 'assets/img/course/courses-06.jpg';
  }

  // Si l'URL contient déjà le domaine mais pas le bon chemin, corriger
  if (imageName.startsWith(STORAGE_BASE + '/') && !imageName.includes('/formations/')) {
    const fileName = imageName.replace(STORAGE_BASE + '/', '');
    const correctedUrl = `${STORAGE_BASE}/formations/${fileName}`;
    console.log('URL corrected:', correctedUrl);
    return correctedUrl;
  }

  // Si l'URL est déjà complète et correcte
  if (imageName.startsWith('http://') || imageName.startsWith('https://')) {
    console.log('URL already complete:', imageName);
    return imageName;
  }

  // Sinon construire l'URL
  const finalUrl = `${STORAGE_BASE}/formations/${imageName}`;
  console.log('Constructed URL:', finalUrl);
  return finalUrl;
}
  getCompetencesList(competences: string | null): string[] {
  if (!competences) return [];
  try {
    return JSON.parse(competences);
  } catch (e) {
    return [];
  }
}

getBannerStyle() {
  if (this.formation?.image_couverture) {
    return {
      'background-image': `url(${this.getImageUrl(this.formation.image_couverture)})`,
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-size': 'cover',
      'position': 'relative'
    };
  }
  return {};
}

getTagsList(tags: string | null): string[] {
  if (!tags) return [];
  try {
    return JSON.parse(tags);
  } catch (e) {
    return [];
  }
}

getOutilsList(outils: string | null): string[] {
  if (!outils) return [];
  try {
    return JSON.parse(outils);
  } catch (e) {
    return [];
  }
}
getLangueLabel(langue: string): string {
  const langues: { [key: string]: string } = {
    'fr': 'Français',
    'en': 'Anglais',
    'es': 'Espagnol',
    'de': 'Allemand',
    'it': 'Italien',
    'pt': 'Portugais',
    'ar': 'Arabe',
    'zh': 'Chinois',
    'ja': 'Japonais',
    'ru': 'Russe'
  };
  return langues[langue] || langue?.charAt(0).toUpperCase() + langue?.slice(1) || 'Non spécifié';
}
formatDate(dateString: string): string {
  if (!dateString) return 'Non spécifié';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    return 'Date invalide';
  }
}

// Méthode bonus pour gérer les statuts de difficulté
getDifficulteLabel(difficulte: string): string {
  const difficultes: { [key: string]: string } = {
    'facile': 'Facile',
    'moyen': 'Moyen',
    'difficile': 'Difficile',
    'expert': 'Expert'
  };
  return difficultes[difficulte] || difficulte?.charAt(0).toUpperCase() + difficulte?.slice(1) || 'Non spécifié';
}

// Méthode pour gérer les types de formation
getTypeFormationLabel(type: string): string {
  const types: { [key: string]: string } = {
    'en_ligne': 'En ligne',
    'presentiel': 'Présentiel',
    'hybride': 'Hybride',
    'e_learning': 'E-learning',
    'webinaire': 'Webinaire',
    'atelier': 'Atelier'
  };
  return types[type] || type?.charAt(0).toUpperCase() + type?.slice(1) || 'Non spécifié';
}

isYouTubeUrl(url: string | null): boolean {
  if (!url) return false;
  
  const youtubePatterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
    /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([a-zA-Z0-9_-]+)/
  ];
  
  return youtubePatterns.some(pattern => pattern.test(url));
}

getYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  
  const patterns = [
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
    /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]+)/,
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/v\/([a-zA-Z0-9_-]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
}

  getYouTubeEmbedUrl(url: string): SafeResourceUrl | null {
    const videoId = this.getYouTubeVideoId(url);
    if (!videoId) return null;
    
    const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1&autoplay=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  
getYouTubeThumbnail(url: string): string {
  const videoId = this.getYouTubeVideoId(url);
  if (!videoId) return this.getImageUrl(null);
  
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

openYouTubeVideo(url: string): void {
  if (this.isYouTubeUrl(url)) {
    window.open(url, '_blank', 'width=800,height=600');
  }
}

// Modification de la méthode getMediaUrl existante
getMediaUrl(mediaName: string | null): string | null {
  if (!mediaName) return null;
  
  // Si c'est une URL YouTube, la retourner telle quelle
  if (this.isYouTubeUrl(mediaName)) {
    return mediaName;
  }
  
  // Sinon, construire l'URL vers le storage local
  return `${STORAGE_BASE}/formations/videos/${mediaName}`;
}
}