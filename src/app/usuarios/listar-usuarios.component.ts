import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css'],
  standalone: false
})
export class ListarUsuariosComponent {
  usuarios$: Observable<Usuario[]>;

  constructor(private usuariosService: UsuariosService) {
    this.usuarios$ = this.usuariosService.getUsuarios();
  }
}
