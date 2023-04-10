import { TestBed } from '@angular/core/testing';

import { RestaurantOwnerService } from './restaurantOwner.service';

describe('RestaurantOwnerService', () => {
  let service: RestaurantOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});