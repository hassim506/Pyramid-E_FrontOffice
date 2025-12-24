import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminLinkedAccountsComponent } from './superadmin-linked-accounts.component';

describe('SuperadminLinkedAccountsComponent', () => {
  let component: SuperadminLinkedAccountsComponent;
  let fixture: ComponentFixture<SuperadminLinkedAccountsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminLinkedAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminLinkedAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
