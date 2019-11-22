import { TestBed } from '@angular/core/testing';

import { GenerarFreelancerService } from './generar-freelancer.service';

describe('GenerarFreelancerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerarFreelancerService = TestBed.get(GenerarFreelancerService);
    expect(service).toBeTruthy();
  });
});
