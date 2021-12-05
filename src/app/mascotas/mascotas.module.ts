import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';


@NgModule({
  declarations: [
    ListaMascotasComponent
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule
  ]
})
export class MascotasModule { }
