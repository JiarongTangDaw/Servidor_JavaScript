import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPorPersonaje } from './ficha-por-personaje';

describe('FichaPorPersonaje', () => {
  let component: FichaPorPersonaje;
  let fixture: ComponentFixture<FichaPorPersonaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaPorPersonaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaPorPersonaje);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
