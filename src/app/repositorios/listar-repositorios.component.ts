import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositoriosService } from './repositorios.service';
import { Repositorio } from './repositorio.model';

@Component({
  selector: 'app-listar-repositorios',
  templateUrl: './listar-repositorios.component.html',
  styleUrls: ['./listar-repositorios.component.css'],
  standalone: false
})
export class ListarRepositoriosComponent {
  repositorios$: Observable<Repositorio[]>;

  constructor(private repositoriosService: RepositoriosService) {
    this.repositorios$ = this.repositoriosService.getRepositorios();
  }
}
