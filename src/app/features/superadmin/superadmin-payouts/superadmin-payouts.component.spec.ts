import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  SuperadminPayoutsComponent } from './superadmin-payouts.component';

describe('SuperadminPayoutsComponent', () => {
  let component: SuperadminPayoutsComponent;
  let fixture: ComponentFixture<SuperadminPayoutsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminPayoutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminPayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
