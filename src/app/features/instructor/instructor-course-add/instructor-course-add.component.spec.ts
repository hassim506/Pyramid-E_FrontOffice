import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorCourseAddComponent } from './instructor-course-add.component';

describe('InstructorCourseAddComponent', () => {
  let component: InstructorCourseAddComponent;
  let fixture: ComponentFixture<InstructorCourseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorCourseAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorCourseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
