import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from './filmes.service';
import { Filme } from './models/filme.model'

@Component({
  selector: 'cin-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {
  filmes!: Filme[];

  constructor(private service: FilmesService, private route: ActivatedRoute){}

  ngOnInit(){
    this.service.listarFilmesPorCategoria(this.route.snapshot.params['id']).subscribe(filmes => this.filmes = filmes)
  }
}
