import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorEarningsComponent } from './superadmin-earnings.component';

describe('InstructorEarningsComponent', () => {
  let component: InstructorEarningsComponent;
  let fixture: ComponentFixture<InstructorEarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorEarningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
