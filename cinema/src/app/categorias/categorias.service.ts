import { Observable } from 'rxjs/internal/Observable';
import { CINEMA_API } from '../app.api';
import { HttpClient } from "@angular/common/http"
import { Categoria } from './categoria/models/categoria.model'
import { Injectable } from '@angular/core';

@Injectable()
export class CategoriasService{
  constructor(private http: HttpClient){}

  listarCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${CINEMA_API}/categorias`);
  }
}