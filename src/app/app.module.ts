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



@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent,
    ListaCancionesComponent,
    FilterPipe,
    FiltrosComponent,
    DetalleFiltroComponent,

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
