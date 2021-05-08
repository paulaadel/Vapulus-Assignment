import { TestBed } from '@angular/core/testing';

import { WookieServiceService } from './wookie-service.service';

describe('WookieServiceService', () => {
  let service: WookieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WookieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
