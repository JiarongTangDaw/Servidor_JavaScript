import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjEnlacesHijo } from './ej-enlaces-hijo';

describe('EjEnlacesHijo', () => {
  let component: EjEnlacesHijo;
  let fixture: ComponentFixture<EjEnlacesHijo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjEnlacesHijo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjEnlacesHijo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
