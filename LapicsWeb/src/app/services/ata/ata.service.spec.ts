import { TestBed } from '@angular/core/testing';

import { AtaService } from './ata.service';

describe('AtaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtaService = TestBed.get(AtaService);
    expect(service).toBeTruthy();
  });
});
