import { Component } from '@angular/core';
import { Categoria } from './categoria/models/categoria.model'

@Component({
  selector: 'cin-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias: Categoria [] = [
    {id: '1', titulo: 'Ação'},
    {id: '2', titulo: 'Terror'},
    {id: '3', titulo: 'Romance'}
  ]
}
