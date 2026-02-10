import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerStarwars } from './ejer-starwars';

describe('EjerStarwars', () => {
  let component: EjerStarwars;
  let fixture: ComponentFixture<EjerStarwars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjerStarwars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjerStarwars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
