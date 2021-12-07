import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from './nuevo-usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NuevoUsuarioService {
  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:3000/user';

  registrarUsuario(nuevoUsuario: NuevoUsuario) {
    return this.httpClient.post(`${this.url}/signup`, nuevoUsuario);
  }

  verificarUserName(userName: string): Observable<any> {
    return this.httpClient.get(`${this.url}/exists/${userName}`);
  }
}
