import { Component } from '@angular/core';
import { FilmesService } from './filmes.service';
import { Filme } from './models/filme.model'

@Component({
  selector: 'cin-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  filmes!: Filme[];

  constructor(private service: FilmesService){}

  ngOnInit(){
    this.service.listarFilmes().subscribe(filmes => this.filmes = filmes)
  }
}
