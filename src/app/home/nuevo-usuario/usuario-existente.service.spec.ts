import { TestBed } from '@angular/core/testing';

import { UsuarioExistenteService } from './usuario-existente.service';

describe('UsuarioExistenteService', () => {
  let service: UsuarioExistenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioExistenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
