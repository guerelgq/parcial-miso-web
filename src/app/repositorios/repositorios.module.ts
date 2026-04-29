import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarRepositoriosComponent } from './listar-repositorios.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListarRepositoriosComponent],
  exports: [ListarRepositoriosComponent]
})
export class RepositoriosModule {}
