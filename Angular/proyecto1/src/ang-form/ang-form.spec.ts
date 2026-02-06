import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngForm } from './ang-form';

describe('AngForm', () => {
  let component: AngForm;
  let fixture: ComponentFixture<AngForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
