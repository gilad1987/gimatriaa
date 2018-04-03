import { TestBed, inject } from '@angular/core/testing';

import { GimatriaService } from './gimatria.service';

describe('GimatriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GimatriaService]
    });
  });

  it('should be created', inject([GimatriaService], (service: GimatriaService) => {
    expect(service).toBeTruthy();
  }));
});
