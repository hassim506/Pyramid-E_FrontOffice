import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminCourseGridComponent } from './superadmin-course-grid.component';

describe('SuperadminCourseGridComponent', () => {
  let component: SuperadminCourseGridComponent;
  let fixture: ComponentFixture<SuperadminCourseGridComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminCourseGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminCourseGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
