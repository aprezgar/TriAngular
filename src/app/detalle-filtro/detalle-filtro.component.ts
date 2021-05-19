import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artist } from '../filtros-canciones/artist';
import { Filtro } from '../filtros-canciones/filtro'
import { GENRES } from '../filtros-canciones/filtros';
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
  @Output() artistSeleccionado = new EventEmitter<Artist>();

  constructor() { }

  ngOnInit(): void {
  }


  seleccionGenre(seleccionado:Genre){

    let inactives = document.getElementsByClassName("inactive");

    for (let i = 0; i < inactives.length; i++){ 
      inactives![i].classList.remove("active")
      console.log(inactives![i], "inactives![i]")
    }

    console.log(seleccionado.id, "seleccionado.id")
    let idGenre = document.getElementById("genre" + seleccionado.id)
    idGenre!.classList.add("active")

    this.genreSeleccionado.emit(seleccionado);
    console.log("seleccionGenre", seleccionado )
    
  }

  seleccionArtist(seleccionado:Artist){
    let inactives = document.getElementsByClassName("inactive");

    for (let i = 0; i < inactives.length; i++){ 
      inactives![i].classList.remove("active")
      console.log(inactives![i], "inactives![i]")
    }

    console.log(seleccionado.id, "seleccionado.id")
    let idArtist = document.getElementById("artist" + seleccionado.id)
    idArtist!.classList.add("active")

    this.artistSeleccionado.emit(seleccionado);
    console.log("seleccionArtist", seleccionado )
  }




 

  

}
