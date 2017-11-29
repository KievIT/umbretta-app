import { TestBed, inject } from '@angular/core/testing';

import { NavitemsService } from './navitems.service';

describe('NavitemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavitemsService]
    });
  });

  it('should be created', inject([NavitemsService], (service: NavitemsService) => {
    expect(service).toBeTruthy();
  }));
});
