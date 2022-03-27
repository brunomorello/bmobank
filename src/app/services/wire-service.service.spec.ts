import { TestBed } from '@angular/core/testing';

import { WireServiceService } from './wire-service.service';

describe('WireServiceService', () => {
  let service: WireServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WireServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
