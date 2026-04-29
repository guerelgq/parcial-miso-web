import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css'],
  standalone: false
})
export class ListarUsuariosComponent {
  usuarios$: Observable<Usuario[]>;
  selectedUsuario: Usuario | null = null;

  constructor(private usuariosService: UsuariosService) {
    this.usuarios$ = this.usuariosService.getUsuarios();
  }

  seleccionarUsuario(usuario: Usuario | null): void {
    this.selectedUsuario = usuario;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
