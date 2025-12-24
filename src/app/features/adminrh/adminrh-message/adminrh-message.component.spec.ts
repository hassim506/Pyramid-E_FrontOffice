import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrhMessageComponent } from './adminrh-message.component';

describe('AdminrhMessageComponent', () => {
  let component: AdminrhMessageComponent;
  let fixture: ComponentFixture<AdminrhMessageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminrhMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrhMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
