import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureFormationComponent } from './lecture-formation.component';

describe('LectureFormationComponent', () => {
  let component: LectureFormationComponent;
  let fixture: ComponentFixture<LectureFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectureFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LectureFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
