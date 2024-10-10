import { TestBed } from '@angular/core/testing';

import { ShirtsService } from './shirts.service';

describe('ShirtsService', () => {
  let service: ShirtsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShirtsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
