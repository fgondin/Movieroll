import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CINEMA_API } from "../app.api";
import { Filme } from "./models/filme.model"

@Injectable()
export class FilmesService{
    constructor(private http: HttpClient){}

    listarFilmes(): Observable<Filme[]>{
        return this.http.get<Filme[]>(`${CINEMA_API}/filmes`)
    }
}