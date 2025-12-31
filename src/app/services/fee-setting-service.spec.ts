import { TestBed } from '@angular/core/testing';

import { FeeSettingService } from './fee-setting-service';

describe('FeeSettingService', () => {
  let service: FeeSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeeSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
