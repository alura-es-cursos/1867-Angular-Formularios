import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NuevoUsuarioService } from './nuevo-usuario.service';
import { NuevoUsuario } from './nuevo-usuario';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  nuevoUsuarioForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private nuevoUsuarioService: NuevoUsuarioService
  ) {}

  ngOnInit(): void {
    this.nuevoUsuarioForm = this.formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: [''],
    });
  }

  registrar() {
    const nuevousuario = this.nuevoUsuarioForm.getRawValue() as NuevoUsuario;
    console.log(nuevousuario);
  }
}
