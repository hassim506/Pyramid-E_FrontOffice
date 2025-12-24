import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhPlansComponent } from './adminrh-plans.component';

describe('AdminrhPlansComponent', () => {
  let component: AdminrhPlansComponent;
  let fixture: ComponentFixture<AdminrhPlansComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminrhPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
