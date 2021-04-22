import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Cancion } from '../cancion';
import { CANCIONES } from './canciones';

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})
export class ListaCancionesComponent implements OnInit {

  canciones = CANCIONES;
  textoFiltrado = "";

  @Output() cancionSeleccionada = new EventEmitter<Cancion>();

  constructor() { }

  ngOnInit(): void {
  }

  selecc(seleccionada:Cancion){
    this.cancionSeleccionada.emit(seleccionada);
  }

}

