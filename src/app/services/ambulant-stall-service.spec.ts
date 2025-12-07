import { TestBed } from '@angular/core/testing';

import { AmbulantStallService } from './ambulant-stall-service';

describe('AmbulantStallService', () => {
  let service: AmbulantStallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbulantStallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
