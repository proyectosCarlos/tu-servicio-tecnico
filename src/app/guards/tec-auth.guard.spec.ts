import { TestBed, async, inject } from '@angular/core/testing';

import { TecAuthGuard } from './tec-auth.guard';

describe('TecAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TecAuthGuard]
    });
  });

  it('should ...', inject([TecAuthGuard], (guard: TecAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
