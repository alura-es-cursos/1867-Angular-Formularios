import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { map, switchMap, first } from 'rxjs';
import { NuevoUsuarioService } from './nuevo-usuario.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExistenteService {
  constructor(private nuevoUsuarioService: NuevoUsuarioService) {}

  usuarioExistente() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((userName) =>
          this.nuevoUsuarioService.verificarUserName(userName)
        ),
        map((existe) => (existe ? { usuarioExistente: true } : null)),
        first()
      );
    };
  }
}
