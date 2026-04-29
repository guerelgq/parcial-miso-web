import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarUsuariosComponent } from './listar-usuarios.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListarUsuariosComponent],
  exports: [ListarUsuariosComponent]
})
export class UsuariosModule {}
