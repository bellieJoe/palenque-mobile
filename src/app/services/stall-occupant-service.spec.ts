import { TestBed } from '@angular/core/testing';

import { StallOccupantService } from './stall-occupant-service';

describe('StallOccupantService', () => {
  let service: StallOccupantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StallOccupantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
