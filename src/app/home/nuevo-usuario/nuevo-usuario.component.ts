import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NuevoUsuarioService } from './nuevo-usuario.service';
import { NuevoUsuario } from './nuevo-usuario';
import { minusculasValidator } from './minusculas.validator';
import { UsuarioExistenteService } from './usuario-existente.service';
import { userNamePasswordValidator } from './userNamePassword.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  nuevoUsuarioForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private nuevoUsuarioService: NuevoUsuarioService,
    private usuarioExistente: UsuarioExistenteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.nuevoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [minusculasValidator],
          [this.usuarioExistente.usuarioExistente()],
        ],
        password: [''],
      },
      {
        validators: [userNamePasswordValidator],
      }
    );
  }

  registrar() {
    if (this.nuevoUsuarioForm.valid) {
      const nuevousuario = this.nuevoUsuarioForm.getRawValue() as NuevoUsuario;
      this.nuevoUsuarioService.registrarUsuario(nuevousuario).subscribe({
        complete: () => this.router.navigate(['']),
        error: () => alert('No fue posible hacer el registro'),
      });
    } else {
      alert('verifica el formulario');
    }
  }
}
