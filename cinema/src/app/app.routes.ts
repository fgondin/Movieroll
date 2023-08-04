import {Routes} from "@angular/router";
import {IndexComponent} from "./index/index.component";
import {SobreComponent} from "./sobre/sobre.component";
import {CategoriaComponent} from "./categoria/categoria.component";
import {FilmesComponent} from "./filmes/filmes.component";

export const ROUTES: Routes = [
    {path: '', component: IndexComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'categoria', component: CategoriaComponent, children:[
        {path:'filmes', component: FilmesComponent}
    ]}
];