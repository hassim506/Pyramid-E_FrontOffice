import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { LightgalleryModule } from 'lightgallery/angular';

import { routes } from '../../../shared/service/routes/routes';
import { FormationsService } from '../../../shared/service/Formations/formations.service';
import { Formations } from '../../../shared/models/Formations.models';

@Component({
  selector: 'app-course-details-2',
  standalone: true,
  imports: [CommonModule, RouterLink, LightgalleryModule],
  templateUrl: './course-details-2.component.html',
  styleUrl: './course-details-2.component.scss'
})
export class CourseDetails2Component implements OnInit, AfterViewChecked {

  routes = routes;

  formation!: Formations;
  loading = true;

  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };

  private lightGallery!: LightGallery;
  private needRefresh = false;

  constructor(
    private route: ActivatedRoute,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.getFormation(id);
    }
  }

  // 🔑 APPEL BACKEND
  getFormation(id: number): void {
    this.loading = true;

    this.formationsService.getFormationById(id).subscribe({
      next: (res: any) => {
        this.formation = res.formation ?? res.data ?? res;
        this.loading = false;
        this.needRefresh = true;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getImage(url?: string | null): string {
    return url
      ? `http://localhost:8000/${url}`
      : 'assets/img/course/course-01.jpg';
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
