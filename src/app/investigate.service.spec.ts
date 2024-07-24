import { TestBed } from '@angular/core/testing';

import { InvestigateService } from './investigate.service';

describe('InvestigateService', () => {
  let service: InvestigateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestigateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
