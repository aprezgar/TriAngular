import { Component, OnInit } from '@angular/core';
import {Cancion} from '../cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {

  //cancion ='What About Us';

  cancion: Cancion = {
    id: 1,
    songName: 'What About Us',
    artist: 'Pink',
    year: 2017,
    album: 'Beautiful Trauma',
    recordCompany: 'RCA Records',
    genre: 'POP',
    file: 'Beautiful_trauma_Pink.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
