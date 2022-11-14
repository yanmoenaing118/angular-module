import { TestBed } from '@angular/core/testing';

import { CastsServiceService } from './casts-service.service';

describe('CastsServiceService', () => {
  let service: CastsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
