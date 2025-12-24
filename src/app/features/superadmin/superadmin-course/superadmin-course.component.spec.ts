import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminCourseComponent } from './superadmin-course.component';

describe('SuperadminCourseComponent', () => {
  let component: SuperadminCourseComponent;
  let fixture: ComponentFixture<SuperadminCourseComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadminCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
