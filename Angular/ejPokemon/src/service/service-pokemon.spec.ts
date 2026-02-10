import { TestBed } from '@angular/core/testing';

import { ServicePokemon } from './service-pokemon';

describe('ServicePokemon', () => {
  let service: ServicePokemon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePokemon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
