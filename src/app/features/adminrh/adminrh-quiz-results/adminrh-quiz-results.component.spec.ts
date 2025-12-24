import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AdminrhQuizResultsComponent } from './adminrh-quiz-results.component';

describe('AdminrhQuizResultsComponent', () => {
  let component: AdminrhQuizResultsComponent;
  let fixture: ComponentFixture<AdminrhQuizResultsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminrhQuizResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhQuizResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
