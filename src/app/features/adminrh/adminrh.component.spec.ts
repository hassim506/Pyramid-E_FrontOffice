import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhComponent } from './adminrh.component';

describe('AdminrhComponent', () => {
  let component: AdminrhComponent;
  let fixture: ComponentFixture<AdminrhComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
