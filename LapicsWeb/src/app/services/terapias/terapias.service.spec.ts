import { TestBed } from '@angular/core/testing';

import { TerapiasService } from './terapias.service';

describe('TerapiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerapiasService = TestBed.get(TerapiasService);
    expect(service).toBeTruthy();
  });
});
