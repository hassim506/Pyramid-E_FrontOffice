import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhQuizDetailsComponent } from './adminrh-quiz-details.component';

describe('AdminrhQuizDetailsComponent', () => {
  let component: AdminrhQuizDetailsComponent;
  let fixture: ComponentFixture<AdminrhQuizDetailsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhQuizDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminrhQuizDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
