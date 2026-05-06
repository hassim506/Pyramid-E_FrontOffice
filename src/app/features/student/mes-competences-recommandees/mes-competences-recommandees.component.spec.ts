import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCompetencesRecommandeesComponent } from './mes-competences-recommandees.component';

describe('MesCompetencesRecommandeesComponent', () => {
  let component: MesCompetencesRecommandeesComponent;
  let fixture: ComponentFixture<MesCompetencesRecommandeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesCompetencesRecommandeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesCompetencesRecommandeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
