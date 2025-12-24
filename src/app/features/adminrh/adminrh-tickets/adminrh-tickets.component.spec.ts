import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AdminrhTicketsComponent } from './adminrh-tickets.component';

describe('AdminrhTicketsComponent', () => {
  let component: AdminrhTicketsComponent;
  let fixture: ComponentFixture<AdminrhTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrhTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
