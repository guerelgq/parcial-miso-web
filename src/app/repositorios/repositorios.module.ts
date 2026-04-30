import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListarRepositoriosComponent } from './listar-repositorios.component';
import { DetalleRepositorioComponent } from './detalle-repositorio.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ListarRepositoriosComponent, DetalleRepositorioComponent],
  exports: [ListarRepositoriosComponent, DetalleRepositorioComponent]
})
export class RepositoriosModule {}
