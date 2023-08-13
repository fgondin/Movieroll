import {Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {SobreComponent} from "./sobre/sobre.component";
import {CategoriasComponent} from "./categorias/categorias.component";
import {FilmesComponent} from "./filmes/filmes.component";

export const ROUTES: Routes = [
    {path: '', component: IndexComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path:'filmes', component: FilmesComponent}
];