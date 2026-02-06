import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Harrypotter } from './harrypotter';

describe('Harrypotter', () => {
  let component: Harrypotter;
  let fixture: ComponentFixture<Harrypotter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Harrypotter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Harrypotter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
