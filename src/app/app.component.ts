import { Component, Input } from '@angular/core';
import { Cancion } from './cancion/cancion';
//import { CANCIONES } from './cancion/canciones';
import { Artist } from './filtros-canciones/artist';
import { Filtro } from './filtros-canciones/filtro';
import { Genre } from './filtros-canciones/genre';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import 'rxjs/add/operator/map';
import { isNgTemplate } from '@angular/compiler';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  private listaCanciones!: AngularFirestoreCollection<Cancion>;
  canciones: Observable<Cancion[]>;

  
  constructor(public firestore: AngularFirestore) {
    //this.canciones = firestore.collection('canciones').valueChanges();

    this.listaCanciones = this.firestore.collection('canciones');

    this.canciones = this.listaCanciones.snapshotChanges().map((changes: any[]) => {
      return changes.map(a =>{
        const data = a.payload.doc.data() as Cancion; 
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }
  form = new FormGroup({
    newTitle: new FormControl(),
    newArtist: new FormControl(),
    newGenre: new FormControl(),
    newYear: new FormControl(),
    newAlbum: new FormControl(),
    newMp3: new FormControl(),
    newFile: new FormControl(),
    newRecordCompany: new FormControl(),
    newDescription: new FormControl(),
    newDuration: new FormControl()
  })
  title: string = "MusicWeb";
  textoFiltrado: string = "";
  //canciones = CANCIONES;
  cancionSelecc: Cancion | null = null;
  filtroSelecc: Filtro | null = null;
  artistSelecc: Artist | null = null;
  genreSelecc: Genre | null = null;
  noSelecc: Filtro | null = null;
  cancionNueva: boolean = false;

  selecc(seleccionada:Cancion){
    this.cancionSelecc = seleccionada;
  }

  seleccionFiltro(seleccion:Filtro){
    this.filtroSelecc = seleccion;
    this.seleccionArtist(null);
    this.seleccionGenre(null);
  }

  seleccionArtist(seleccion:Artist | null){
    this.artistSelecc = seleccion;
  }

  seleccionGenre(seleccion:Genre | null){
    this.genreSelecc = seleccion;
  }


  addSong() {
    if (this.cancionNueva == true){
      this.cancionNueva = false;
    }
    else if (this.cancionNueva == false)
    this.cancionNueva = true;
  } 


  onSubmit() {
    this.listaCanciones.add({
        id: 0,
        description:this.form.value.newDescription,
        title: this.form.value.newTitle,
        artist: this.form.value.newArtist,
        recordCompany: this.form.value.newRecordCompany,
        genre: this.form.value.newGenre,
        album: this.form.value.newAlbum,
        year: this.form.value.newYear,
        duration: this.form.value.newDuration,
        file: this.form.value.newFile,
        mp3: this.form.value.newMp3,
    })
    .then((res: any) => {
        console.log(res);
        this.form.reset();
    })
    .catch((e: any) => {
        console.log(e);
    })
}
}



function AngularFireObject<T>() {
  throw new Error('Function not implemented.');
}

