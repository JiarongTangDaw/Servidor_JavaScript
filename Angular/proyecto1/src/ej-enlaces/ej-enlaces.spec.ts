import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjEnlaces } from './ej-enlaces';

describe('EjEnlaces', () => {
  let component: EjEnlaces;
  let fixture: ComponentFixture<EjEnlaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjEnlaces]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjEnlaces);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
