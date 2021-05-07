import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Cancion } from '../cancion/cancion';
//import { CANCIONES } from '../cancion/canciones';
import { Artist } from '../filtros-canciones/artist';
import { Filtro } from '../filtros-canciones/filtro';
import { Genre } from '../filtros-canciones/genre';
//import { RouterLinkActive } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})
export class ListaCancionesComponent implements OnInit {


  canciones: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
  this.canciones = firestore.collection('canciones').valueChanges();
  }

  //canciones = CANCIONES;
  @Input() textoBusqueda: string = "";
  @Input() filtroArtista: Artist | null = null;
  @Input() filtroGenre: Genre | null = null;
  @Input() filtroNo: Filtro | null = null;



  @Output() cancionSeleccionada = new EventEmitter<Cancion>();





  ngOnInit(): void {
  }

  selecc(seleccionada:Cancion){
    this.cancionSeleccionada.emit(seleccionada);
  }


}

