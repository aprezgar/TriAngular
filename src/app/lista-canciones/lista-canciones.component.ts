import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Cancion } from '../cancion/cancion';
import { CANCIONES } from '../cancion/canciones';
import { Artist } from '../filtros-canciones/artist';
import { Filtro } from '../filtros-canciones/filtro';
import { Genre } from '../filtros-canciones/genre';

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})
export class ListaCancionesComponent implements OnInit {

  canciones = CANCIONES; 
  @Input() textoBusqueda: string = "";
  @Input() filtroArtista: Artist | null = null; 
  @Input() filtroGenre: Genre | null = null; 
  @Input() filtroNo: Filtro | null = null;

  

  @Output() cancionSeleccionada = new EventEmitter<Cancion>();



  constructor() { }

  ngOnInit(): void {
  }

  selecc(seleccionada:Cancion){
    this.cancionSeleccionada.emit(seleccionada);
  }


}

