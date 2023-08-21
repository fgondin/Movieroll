import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable } from "rxjs";
import { CINEMA_API } from "../app.api";
import { Filme } from "./models/filme.model"
import { ErrorHandler } from "../app.error-handler";

@Injectable()
export class FilmesService{
    constructor(private http: HttpClient){}

    listarFilmesPorCategoria(id: number): Observable<Filme[]>{
        return this.http.get<Filme[]>(`${CINEMA_API}/filmes?categoria_id=${id}`).pipe(catchError(ErrorHandler.handleError));
    }
}