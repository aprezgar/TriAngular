import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artist } from '../filtros-canciones/artist';
import { Filtro } from '../filtros-canciones/filtro'
import { FILTROS, GENRES } from '../filtros-canciones/filtros';
import { ARTISTS } from '../filtros-canciones/filtros';
import { Genre } from '../filtros-canciones/genre';

@Component({
  selector: 'app-detalle-filtro',
  templateUrl: './detalle-filtro.component.html',
  styleUrls: ['./detalle-filtro.component.css']
})
export class DetalleFiltroComponent implements OnInit {
  @Input() filtro: Filtro | null = null;
  genres = GENRES;
  @Output() genreSeleccionado = new EventEmitter<Genre>();
  artists = ARTISTS;
  filtros = FILTROS;
  @Output() artistSeleccionado = new EventEmitter<Artist>();

  constructor() { }

  ngOnInit(): void {
  }


  seleccionGenre(seleccionado:Genre){
    this.genreSeleccionado.emit(seleccionado);
  }

  seleccionArtist(seleccionado:Artist){
    this.artistSeleccionado.emit(seleccionado);
  }

}
