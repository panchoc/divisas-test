import { TestBed } from '@angular/core/testing';

import { DivisasServiceService } from './divisas-service.service';

describe('DivisasServiceService', () => {
  let service: DivisasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
