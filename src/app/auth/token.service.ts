import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  obtenerToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  guardarToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  eliminarToken() {
    localStorage.removeItem(KEY);
  }

  existeToken() {
    return !!this.obtenerToken();
  }
}
