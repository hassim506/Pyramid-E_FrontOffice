import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminQuizComponent } from './superadmin-quiz.component';

describe('SuperadminQuizComponent', () => {
  let component: SuperadminQuizComponent;
  let fixture: ComponentFixture<SuperadminQuizComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminQuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperadminQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
