import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filtro } from '../filtros-canciones/filtro';
import { FILTROS } from '../filtros-canciones/filtros';


@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  filtros = FILTROS;
  @Output() filtroSeleccionado = new EventEmitter<Filtro>();
  

  constructor() { }

  ngOnInit(): void {
  }

  seleccionFiltro(seleccionado:Filtro){
    this.filtroSeleccionado.emit(seleccionado);
    console.log(seleccionado, "seleccionado")
  }

 


}
