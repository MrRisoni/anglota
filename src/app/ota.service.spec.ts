import { TestBed } from '@angular/core/testing';

import { OtaService } from './ota.service';

describe('OtaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtaService = TestBed.get(OtaService);
    expect(service).toBeTruthy();
  });
});
