import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';
import { ListaCancionesComponent } from './lista-canciones/lista-canciones.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ReproductorComponent } from './reproductor/reproductor.component';


@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent,
    ListaCancionesComponent,
    FilterPipe,
    ReproductorComponent

  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
