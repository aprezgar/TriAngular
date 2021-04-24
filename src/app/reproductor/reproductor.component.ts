import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cancion} from '../cancion/cancion';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})

export class ReproductorComponent {

  @Input() cancion: Cancion | null = null;

  state: any;
  currentFile: any = {};

  isFirstPlaying(){
    return false;
  }

  isLastPlaying(){
    return true;
  }
}
