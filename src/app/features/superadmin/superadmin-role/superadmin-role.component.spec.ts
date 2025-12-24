import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminRoleComponent } from './superadmin-role.component';

describe('SuperadminRoleComponent', () => {
  let component: SuperadminRoleComponent;
  let fixture: ComponentFixture<SuperadminRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperadminRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadminRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
