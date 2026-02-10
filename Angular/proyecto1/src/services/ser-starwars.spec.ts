import { TestBed } from '@angular/core/testing';

import { SerStarwars } from './ser-starwars';

describe('SerStarwars', () => {
  let service: SerStarwars;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerStarwars);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
