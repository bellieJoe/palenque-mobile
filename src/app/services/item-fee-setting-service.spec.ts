import { TestBed } from '@angular/core/testing';

import { ItemFeeSettingService } from './item-fee-setting-service';

describe('ItemFeeSettingService', () => {
  let service: ItemFeeSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemFeeSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
