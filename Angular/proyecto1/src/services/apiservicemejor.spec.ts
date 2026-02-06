import { TestBed } from '@angular/core/testing';

import { Apiservicemejor } from './apiservicemejor';

describe('Apiservicemejor', () => {
  let service: Apiservicemejor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apiservicemejor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
