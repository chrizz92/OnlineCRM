import { TestBed } from '@angular/core/testing';

import { PreferencesGuardGuard } from './preferences-guard.guard';

describe('PreferencesGuardGuard', () => {
  let guard: PreferencesGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreferencesGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
