import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  AdminrhPayoutsComponent } from './adminrh-payouts.component';

describe('AdminrhPayoutsComponent', () => {
  let component: AdminrhPayoutsComponent;
  let fixture: ComponentFixture<AdminrhPayoutsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminrhPayoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhPayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
