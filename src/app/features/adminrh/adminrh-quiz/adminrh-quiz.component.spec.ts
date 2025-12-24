import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhQuizComponent } from './adminrh-quiz.component';

describe('AdminrhQuizComponent', () => {
  let component: AdminrhQuizComponent;
  let fixture: ComponentFixture<AdminrhQuizComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminrhQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
