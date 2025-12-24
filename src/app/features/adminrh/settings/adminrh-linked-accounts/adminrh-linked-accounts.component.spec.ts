import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhLinkedAccountsComponent } from './adminrh-linked-accounts.component';

describe('AdminrhLinkedAccountsComponent', () => {
  let component: AdminrhLinkedAccountsComponent;
  let fixture: ComponentFixture<AdminrhLinkedAccountsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminrhLinkedAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhLinkedAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
