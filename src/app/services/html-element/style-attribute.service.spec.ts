import { TestBed, inject } from '@angular/core/testing';

import { StyleAttributeService } from './style-attribute.service';

describe('StyleAttributeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleAttributeService]
    });
  });

  it('should be created', inject([StyleAttributeService], (service: StyleAttributeService) => {
    expect(service).toBeTruthy();
  }));
});
