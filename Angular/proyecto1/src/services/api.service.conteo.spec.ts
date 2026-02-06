import { TestBed } from '@angular/core/testing';

import { ApiServiceConteo } from './api.service.conteo';

describe('ApiServiceConteo', () => {
  let service: ApiServiceConteo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceConteo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
