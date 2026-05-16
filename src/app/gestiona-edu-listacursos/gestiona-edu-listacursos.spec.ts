import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionaEduListacursos } from './gestiona-edu-listacursos';

describe('GestionaEduListacursos', () => {
  let component: GestionaEduListacursos;
  let fixture: ComponentFixture<GestionaEduListacursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionaEduListacursos],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionaEduListacursos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
