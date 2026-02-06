import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuForm } from './usu-form';

describe('UsuForm', () => {
  let component: UsuForm;
  let fixture: ComponentFixture<UsuForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
