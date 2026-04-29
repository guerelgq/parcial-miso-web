import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListarUsuariosComponent } from './listar-usuarios.component';
import { DetalleUsuarioComponent } from './detalle-usuario.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListarUsuariosComponent, DetalleUsuarioComponent],
  exports: [ListarUsuariosComponent, DetalleUsuarioComponent]
})
export class UsuariosModule {}
