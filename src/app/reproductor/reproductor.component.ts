import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cancion} from '../cancion/cancion';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})

export class ReproductorComponent{

  @Input() cancion: Cancion | null = null;
  stop = true;
  audio!: HTMLAudioElement;
  valuePlayedTime!:string;
 
  constructor() { }

  ngOnInit(): void {
    this.valuePlayedTime = '00:00'
  }

  ngOnChanges() {
    if (this.cancion) {
      console.log("ngOnChanges this.cancion", this.cancion)
      if (this.audio != undefined){
        this.onStop();
        this.audio.src = this.cancion!.mp3;
      } else{
        this.audio = new Audio();
        this.audio.src = this.cancion!.mp3;
        console.log("this.cancion!.mp3", this.cancion!.mp3)
      }
    }
  }

  onPlay(): void {
    console.log(this.audio, "this.audio")
    this.audio.play();
    this.stop = false;
  }

  onPause() {
    this.audio.pause();
    this.stop = true;
  }

  onStop() {
    if (this.cancion) {
      this.audio.src = this.cancion!.mp3;
      this.stop = true;
    }
  }
}
