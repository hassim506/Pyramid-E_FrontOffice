import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminPlansComponent } from './superadmin-plans.component';

describe('SuperadminPlansComponent', () => {
  let component: SuperadminPlansComponent;
  let fixture: ComponentFixture<SuperadminPlansComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperadminPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
