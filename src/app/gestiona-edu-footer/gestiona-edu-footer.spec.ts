import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionaEduFooter } from './gestiona-edu-footer';

describe('GestionaEduFooter', () => {
  let component: GestionaEduFooter;
  let fixture: ComponentFixture<GestionaEduFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionaEduFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionaEduFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
