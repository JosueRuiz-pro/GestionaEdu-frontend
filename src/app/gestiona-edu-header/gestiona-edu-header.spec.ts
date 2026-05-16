import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionaEduHeader } from './gestiona-edu-header';

describe('GestionaEduHeader', () => {
  let component: GestionaEduHeader;
  let fixture: ComponentFixture<GestionaEduHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionaEduHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionaEduHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
