import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FILTROS, GENRES } from '../filtros-canciones/filtros';
import { Genre } from '../filtros-canciones/genre';

@Component({
  selector: 'app-detalle-genre',
  templateUrl: './detalle-genre.component.html',
  styleUrls: ['./detalle-genre.component.css']
})
export class DetalleGenreComponent implements OnInit {
  genres = GENRES;
  @Input() genre: Genre | null = null;
  @Output() genreSeleccionado = new EventEmitter<Genre>();


  constructor() { }

  ngOnInit(): void {
  }

  seleccionGenre(seleccionado:Genre){
    this.genreSeleccionado.emit(seleccionado);
  }

}
