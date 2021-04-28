import { Component, Input, OnInit } from '@angular/core';
import {Cancion} from '../cancion/cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})
export class CancionesComponent implements OnInit {

  @Input() cancion: Cancion | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
