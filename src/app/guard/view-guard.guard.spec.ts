import { TestBed } from '@angular/core/testing';

import { ViewGuardGuard } from './view-guard.guard';

describe('ViewGuardGuard', () => {
  let guard: ViewGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ViewGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
