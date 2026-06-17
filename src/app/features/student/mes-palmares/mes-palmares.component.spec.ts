import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPalmaresComponent } from './mes-palmares.component';

describe('MesPalmaresComponent', () => {
  let component: MesPalmaresComponent;
  let fixture: ComponentFixture<MesPalmaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesPalmaresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesPalmaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
