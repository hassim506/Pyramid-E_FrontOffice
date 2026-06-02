import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminRapportsComponent } from './superadmin-rapports.component';

describe('SuperadminRapportsComponent', () => {
  let component: SuperadminRapportsComponent;
  let fixture: ComponentFixture<SuperadminRapportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminRapportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminRapportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
