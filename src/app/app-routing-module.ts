import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleRepositorioComponent } from './repositorios/detalle-repositorio.component';

const routes: Routes = [
  { path: 'repositorios/:id', component: DetalleRepositorioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
