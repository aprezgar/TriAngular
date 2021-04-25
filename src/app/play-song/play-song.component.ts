import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cancion } from '../cancion/cancion';

@Component({
  selector: 'app-play-song',
  templateUrl: './play-song.component.html',
  styleUrls: ['./play-song.component.css']
})
export class PlaySongComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
