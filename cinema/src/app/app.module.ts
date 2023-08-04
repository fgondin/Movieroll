import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { SobreComponent } from './sobre/sobre.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { FilmesComponent } from './filmes/filmes.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    SobreComponent,
    CategoriaComponent,
    FilmesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
