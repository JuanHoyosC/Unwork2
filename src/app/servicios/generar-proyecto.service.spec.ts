import { TestBed } from '@angular/core/testing';

import { GenerarProyectoService } from './generar-proyecto.service';

describe('GenerarProyectoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerarProyectoService = TestBed.get(GenerarProyectoService);
    expect(service).toBeTruthy();
  });
});
