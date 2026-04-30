import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map, startWith } from 'rxjs/operators';
import { RepositoriosService } from './repositorios.service';
import { Repositorio } from './repositorio.model';

interface RepoState {
  loading: boolean;
  repo: Repositorio | null;
}

@Component({
  selector: 'app-detalle-repositorio',
  templateUrl: './detalle-repositorio.component.html',
  styleUrls: ['./detalle-repositorio.component.css'],
  standalone: false
})
export class DetalleRepositorioComponent implements OnInit {
  state$!: Observable<RepoState>;

  constructor(
    private route: ActivatedRoute,
    private repositoriosService: RepositoriosService
  ) {}

  ngOnInit(): void {
    this.state$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.repositoriosService.getRepositorio(id).pipe(
          map(repo => ({ loading: false, repo: repo ?? null }) as RepoState),
          startWith({ loading: true, repo: null } as RepoState)
        );
      })
    );
  }
}
