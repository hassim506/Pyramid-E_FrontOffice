import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhCourseGridComponent } from './adminrh-course-grid.component';

describe('AdminrhCourseGridComponent', () => {
  let component: AdminrhCourseGridComponent;
  let fixture: ComponentFixture<AdminrhCourseGridComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminrhCourseGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhCourseGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
