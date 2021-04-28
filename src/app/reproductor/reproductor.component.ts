import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Cancion} from '../cancion/cancion';
import { PlaySongComponent } from "../play-song/play-song.component";

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})

export class ReproductorComponent implements OnInit{

  @ViewChild(PlaySongComponent, { static: false })
  playsong!: PlaySongComponent;

  @Input() cancion: Cancion | null = null;
  stop = true;
  audio!: HTMLAudioElement;
  valuePlayedTime!:string;

  interval!: NodeJS.Timer;
  currentAudio = this.audio;

  constructor() {
    this.toHumanTime(0);
  }

  ngOnInit(): void {
    this.valuePlayedTime = '00:00'
  }

  ngOnChanges() {
    if (this.cancion) {
      console.log("ngOnChanges this.cancion", this.cancion)
      if (this.audio != undefined){
        this.onStop();
        this.audio.src = this.cancion!.mp3;
        this.onPlay();
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
    this.interval = setInterval(function () {
      //do nothing. this just keeps the bar refreshing
    }, 1000);
    this.stop = false;
  }

  playSong (){
    this.onPlay();
  }

  onPause() {
    clearInterval(this.interval);
    this.audio.pause();
    this.stop = true;
  }

  onStop() {
    if (this.cancion) {
      clearInterval(this.interval);
      this.audio.src = this.cancion!.mp3;
      this.stop = true;
    }
  }

  toHumanTime(length: number) {
    //console.log(`toHumanTime() -> length: ${length}`);
    var minutes = Math.floor(length / 60),
    seconds_int = length - minutes * 60,
    seconds_str = seconds_int.toString(),
    seconds = seconds_int < 10 ? seconds_str.substr(0, 1) : seconds_str.substr(0, 2),
    time = (minutes < 10 ? "0" + minutes : minutes) + ':' + (seconds_int < 10 ? "0" + seconds : seconds);
    return time;
  }

  refreshTimePlayed(event: any){
    console.log(`event: ${event}`);
    this.valuePlayedTime = this.toHumanTime(event);
    this.audio.currentTime = this.toSeconds(this.valuePlayedTime);
  }

  toPercent(time: string) {
      let duration = this.audio.duration;
      let minToSec = time.split(':');
      let minutos = Math.floor(parseInt(minToSec[0]) * 60);
      if(minToSec[1][0] === "0"){
        minToSec[1] = minToSec[1][1]
      }
      let segundos = Math.floor(parseInt(minToSec[1]));
      return Math.floor(minutos + segundos) * 100 / duration;
  }

  toSeconds(time: string){
    let duration = this.audio.duration;
    let minToSec = time.split(':');
    let minutos = Math.floor(parseInt(minToSec[0]) * 60);
    if(minToSec[1][0] === "0"){
      minToSec[1] = minToSec[1][1]
    }
    let segundos = Math.floor(parseInt(minToSec[1]));
    return minutos + segundos;
  }

  changeCurrentTime(){
    //console.log(`valuePlayedTime: ${this.valuePlayedTime}`);
    this.audio.currentTime = this.toSeconds(this.valuePlayedTime);
    this.toHumanTime(this.audio.currentTime);
  }
}
