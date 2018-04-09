import { TestBed, inject } from '@angular/core/testing';

import { FondoService } from './fondo.service';

describe('FondoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FondoService]
    });
  });

  it('should be created', inject([FondoService], (service: FondoService) => {
    expect(service).toBeTruthy();
  }));
});
