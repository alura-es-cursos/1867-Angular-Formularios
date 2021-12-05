import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from './nuevo-usuario';

@Injectable({
  providedIn: 'root',
})
export class NuevoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  registrarUsuario(nuevoUsuario: NuevoUsuario) {
    return this.httpClient.post(
      'http://localhost:3000/user/signup',
      nuevoUsuario
    );
  }
}
