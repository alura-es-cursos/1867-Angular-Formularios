import { TestBed } from '@angular/core/testing';

import { NuevoUsuarioService } from './nuevo-usuario.service';

describe('NuevoUsuarioService', () => {
  let service: NuevoUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevoUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
