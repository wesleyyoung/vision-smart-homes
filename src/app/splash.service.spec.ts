import { TestBed } from '@angular/core/testing';

import { SplashService } from './splash.service';

describe('SplashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SplashService = TestBed.get(SplashService);
    expect(service).toBeTruthy();
  });
});
