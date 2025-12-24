import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminQuizResultsComponent } from './superadmin-quiz-results.component';

describe('SuperadminQuizResultsComponent', () => {
  let component: SuperadminQuizResultsComponent;
  let fixture: ComponentFixture<SuperadminQuizResultsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminQuizResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminQuizResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
