import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Starwars } from './starwars';

describe('Starwars', () => {
  let component: Starwars;
  let fixture: ComponentFixture<Starwars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Starwars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Starwars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
