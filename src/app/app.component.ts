import { Component } from '@angular/core';
import { Cancion } from './cancion/cancion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'MusicWeb';
  cancionSelecc: Cancion | null = null;

  selecc(seleccionada:Cancion){
    this.cancionSelecc = seleccionada;
  }
}




