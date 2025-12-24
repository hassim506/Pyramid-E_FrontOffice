import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhEarningsComponent } from './adminrh-earnings.component';

describe('AdminrhEarningsComponent', () => {
  let component: AdminrhEarningsComponent;
  let fixture: ComponentFixture<AdminrhEarningsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrhEarningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
