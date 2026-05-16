import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionaEduFormulario } from './gestiona-edu-formulario';

describe('GestionaEduFormulario', () => {
  let component: GestionaEduFormulario;
  let fixture: ComponentFixture<GestionaEduFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionaEduFormulario],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionaEduFormulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
