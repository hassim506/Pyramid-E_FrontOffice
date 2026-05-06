import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhDemandeSessionComponent } from './adminrh-demande-session.component';

describe('AdminrhDemandeSessionComponent', () => {
  let component: AdminrhDemandeSessionComponent;
  let fixture: ComponentFixture<AdminrhDemandeSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhDemandeSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhDemandeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
