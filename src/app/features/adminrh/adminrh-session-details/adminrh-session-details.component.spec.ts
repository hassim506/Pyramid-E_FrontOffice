import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhSessionDetailsComponent } from './adminrh-session-details.component';

describe('AdminrhSessionDetailsComponent', () => {
  let component: AdminrhSessionDetailsComponent;
  let fixture: ComponentFixture<AdminrhSessionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhSessionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhSessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
