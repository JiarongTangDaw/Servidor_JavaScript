import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej2Enlaces } from './ej2-enlaces';

describe('Ej2Enlaces', () => {
  let component: Ej2Enlaces;
  let fixture: ComponentFixture<Ej2Enlaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ej2Enlaces]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ej2Enlaces);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
