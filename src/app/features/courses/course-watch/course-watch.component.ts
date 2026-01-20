// import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
// import { LightGallery } from 'lightgallery/lightgallery';
import { routes } from '../../../shared/service/routes/routes';
import Aos from 'aos';
import { CommonModule } from '@angular/common';
import { LightgalleryModule } from 'lightgallery/angular';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { LightGallery } from 'lightgallery/lightgallery';
import { LightGallerySettings } from 'lightgallery/lg-settings';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-course-watch',
  imports: [CommonModule, RouterLink, LightgalleryModule],
  templateUrl: './course-watch.component.html',
  styleUrl: './course-watch.component.scss'
})
export class CourseWatchComponent implements OnInit, AfterViewChecked {
  // Configuration simplifiée sans plugins
  settings: Partial<LightGallerySettings> = {
    counter: false,
    download: false,
    selector: '.lg-item',
    speed: 500,
    loop: true,
    thumbnail: true
  };

  private lightGallery!: LightGallery;
  private needRefresh = false;

  ngOnInit(): void {
    // Votre code d'initialisation
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
}