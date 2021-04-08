import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionesComponent } from './canciones/canciones.component';



@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent,


  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
