import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artist } from '../filtros-canciones/artist';
import { FILTROS } from '../filtros-canciones/filtros';

@Component({
  selector: 'app-detalle-artist',
  templateUrl: './detalle-artist.component.html',
  styleUrls: ['./detalle-artist.component.css']
})
export class DetalleArtistComponent implements OnInit {
  @Input() artist: Artist | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
