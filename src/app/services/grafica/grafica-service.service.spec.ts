import { TestBed } from '@angular/core/testing';

import { GraficaServiceService } from './grafica-service.service';

describe('GraficaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraficaServiceService = TestBed.get(GraficaServiceService);
    expect(service).toBeTruthy();
  });
});
