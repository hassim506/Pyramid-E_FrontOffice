import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhQuizQuestionsComponent } from './adminrh-quiz-questions.component';

describe('AdminrhQuizQuestionsComponent', () => {
  let component: AdminrhQuizQuestionsComponent;
  let fixture: ComponentFixture<AdminrhQuizQuestionsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminrhQuizQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhQuizQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
