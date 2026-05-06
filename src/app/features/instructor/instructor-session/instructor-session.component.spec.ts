import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSessionComponent } from './instructor-session.component';

describe('InstructorSessionComponent', () => {
  let component: InstructorSessionComponent;
  let fixture: ComponentFixture<InstructorSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
