import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRessourcesComponent } from './video-ressources.component';

describe('VideoRessourcesComponent', () => {
  let component: VideoRessourcesComponent;
  let fixture: ComponentFixture<VideoRessourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoRessourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
