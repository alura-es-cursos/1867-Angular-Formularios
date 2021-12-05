import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'mascotas',
    loadChildren: () =>
      import('./mascotas/mascotas.module').then(
        (module) => module.MascotasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
