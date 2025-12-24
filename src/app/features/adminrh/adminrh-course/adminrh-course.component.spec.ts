import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhCourseComponent } from './adminrh-course.component';

describe('AdminrhCourseComponent', () => {
  let component: AdminrhCourseComponent;
  let fixture: ComponentFixture<AdminrhCourseComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrhCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
