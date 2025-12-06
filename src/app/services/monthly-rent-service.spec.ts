import { TestBed } from '@angular/core/testing';

import { MonthlyRentService } from './monthly-rent-service';

describe('MonthlyRentService', () => {
  let service: MonthlyRentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlyRentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
