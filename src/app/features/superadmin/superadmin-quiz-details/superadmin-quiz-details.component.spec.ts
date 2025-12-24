import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminQuizDetailsComponent } from './superadmin-quiz-details.component';

describe('SuperadminQuizDetailsComponent', () => {
  let component: SuperadminQuizDetailsComponent;
  let fixture: ComponentFixture<SuperadminQuizDetailsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminQuizDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminQuizDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
