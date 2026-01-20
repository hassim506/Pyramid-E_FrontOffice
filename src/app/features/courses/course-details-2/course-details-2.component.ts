import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { LightGallery } from 'lightgallery/lightgallery';
import { LightGallerySettings } from 'lightgallery/lg-settings';
import { routes } from '../../../shared/service/routes/routes';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';

@Component({
  selector: 'app-course-details-2',
  imports: [CommonModule, RouterLink, LightgalleryModule],
  templateUrl: './course-details-2.component.html',
  styleUrl: './course-details-2.component.scss'
})
export class CourseDetails2Component implements OnInit, AfterViewChecked {
  routes = routes;
  
  // Configuration corrigée pour éviter l'erreur TypeScript
  settings: Partial<LightGallerySettings> = {
    counter: false,
    download: false,
    selector: '.lg-item'
  };

  private lightGallery!: LightGallery;
  private needRefresh = false;

  ngOnInit(): void {
    Aos.init({ duration: 1200, once: true });
    
    // Import dynamique des plugins pour éviter les erreurs TypeScript
    this.loadLightGalleryPlugins();
  }

  ngAfterViewChecked(): void {
    if (this.needRefresh && this.lightGallery) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }

  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;
  };

  private async loadLightGalleryPlugins(): Promise<void> {
    try {
      // Import dynamique des plugins
      const [{ default: lgZoom }, { default: lgVideo }] = await Promise.all([
        import('lightgallery/plugins/zoom'),
        import('lightgallery/plugins/video')
      ]);

      // Mise à jour de la configuration avec les plugins
      this.settings = {
        ...this.settings,
        plugins: [lgZoom, lgVideo] as any
      };
    } catch (error) {
      console.warn('Erreur lors du chargement des plugins LightGallery:', error);
      // Configuration de base sans plugins en cas d'erreur
      this.settings = {
        counter: false,
        download: false,
        selector: '.lg-item'
      };
    }
  }
}