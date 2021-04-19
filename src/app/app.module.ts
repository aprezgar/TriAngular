import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';
import { ListaCancionesComponent } from './lista-canciones/lista-canciones.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FiltrosComponent } from './filtros/filtros.component';
import { DetalleFiltroComponent } from './detalle-filtro/detalle-filtro.component';
import { DetalleGenreComponent } from './detalle-genre/detalle-genre.component';
import { DetalleArtistComponent } from './detalle-artist/detalle-artist.component';



@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent,
    ListaCancionesComponent,
    FilterPipe,
    FiltrosComponent,
    DetalleFiltroComponent,
    DetalleGenreComponent,
    DetalleArtistComponent,

  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
