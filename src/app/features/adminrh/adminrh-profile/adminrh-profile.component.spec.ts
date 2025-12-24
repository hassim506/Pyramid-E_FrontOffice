import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhProfileComponent } from './adminrh-profile.component';

describe('AdminrhProfileComponent', () => {
  let component: AdminrhProfileComponent;
  let fixture: ComponentFixture<AdminrhProfileComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrhProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
