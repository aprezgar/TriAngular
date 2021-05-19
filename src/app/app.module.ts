import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';
import { ListaCancionesComponent } from './lista-canciones/lista-canciones.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FiltrosComponent } from './filtros/filtros.component';
import { DetalleFiltroComponent } from './detalle-filtro/detalle-filtro.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { PlaySongComponent } from './play-song/play-song.component';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent,
    ListaCancionesComponent,
    FilterPipe,
    FiltrosComponent,
    DetalleFiltroComponent,
    ReproductorComponent,
    PlaySongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
