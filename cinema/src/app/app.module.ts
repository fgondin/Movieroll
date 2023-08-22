import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { SobreComponent } from './sobre/sobre.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FilmesComponent } from './filmes/filmes.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { CategoriaComponent } from './categorias/categoria/categoria.component'
import { HttpClientModule } from '@angular/common/http';
import { CategoriasService } from './categorias/categorias.service';
import { FilmesService } from './filmes/filmes.service';
import { FilmeComponent } from './filmes/filme/filme.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    SobreComponent,
    CategoriasComponent,
    FilmesComponent,
    CategoriaComponent,
    FilmeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [CategoriasService, FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
