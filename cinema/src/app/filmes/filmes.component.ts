import { Component } from '@angular/core';
import { Filme } from './modelo/filme.model'

@Component({
  selector: 'cin-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent {

  acao: Filme[] = [
    {nome: '007 Goldenye', src: ''},
    {nome: 'Duro de Matar', src: ''},
    {nome: 'O Exterminador do Futuro', src: ''}
  ]

  terror: Filme [] = [
    {nome: 'A Bruxa de Blair', src: ''},
    {nome: 'O Chamado', src: ''},
    {nome: 'O Silêncio dos Inocentes', src: ''}
  ]

  romance: Filme [] = [
    {nome: 'Encontro Marcado', src: ''},
    {nome: 'Uma Linda Mulher', src: ''},
    {nome: 'Amor Além da Vida', src: ''}
  ]

}
