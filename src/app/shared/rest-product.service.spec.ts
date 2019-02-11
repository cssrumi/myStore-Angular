import { TestBed } from '@angular/core/testing';

import { RestProductService } from './rest-product.service';

describe('RestProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestProductService = TestBed.get(RestProductService);
    expect(service).toBeTruthy();
  });
});
