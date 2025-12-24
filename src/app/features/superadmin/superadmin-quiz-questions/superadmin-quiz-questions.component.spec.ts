import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminQuizQuestionsComponent } from './superadmin-quiz-questions.component';

describe('SuperadminQuizQuestionsComponent', () => {
  let component: SuperadminQuizQuestionsComponent;
  let fixture: ComponentFixture<SuperadminQuizQuestionsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminQuizQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminQuizQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
