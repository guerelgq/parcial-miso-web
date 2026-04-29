import { Component, Input } from '@angular/core';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css'],
  standalone: false
})
export class DetalleUsuarioComponent {
  @Input() usuario: Usuario | null = null;
}
