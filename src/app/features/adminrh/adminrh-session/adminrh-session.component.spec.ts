import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhSessionComponent } from './adminrh-session.component';

describe('AdminrhSessionComponent', () => {
  let component: AdminrhSessionComponent;
  let fixture: ComponentFixture<AdminrhSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminrhSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
