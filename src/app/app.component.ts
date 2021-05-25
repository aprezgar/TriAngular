import { Component, Input } from '@angular/core';
import { Cancion } from './cancion/cancion';
//import { CANCIONES } from './cancion/canciones';
import { Artist } from './filtros-canciones/artist';
import { Filtro } from './filtros-canciones/filtro';
import { Genre } from './filtros-canciones/genre';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder,
  FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { isNgTemplate } from '@angular/compiler';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirebaseStorageService } from './firebase-storage.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <button class="green-button">Button</button>`

})
export class AppComponent {

  private listaCanciones!: AngularFirestoreCollection<Cancion>;
  canciones: Observable<Cancion[]>;


  constructor(public firestore: AngularFirestore,private firebaseStorage: FirebaseStorageService) {
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
    newTitle: new FormControl('',Validators.required),
    newArtist: new FormControl('',Validators.required),
    newGenre: new FormControl('',Validators.required),
    newYear: new FormControl(),
    newAlbum: new FormControl(),
    newMp3: new FormControl('',Validators.required),
    newFile: new FormControl('',Validators.required),
    newRecordCompany: new FormControl(),
    newDescription: new FormControl(),
    newDuration: new FormControl()
  })

  saveData(){
    if (this.form.valid) {
    console.log(this.form.value);
  } else {
    alert("FILL ALL FIELDS");
  }
  }

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

  OnUpload(f:any){
    console.log('subir',f);


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

public archivoForm = new FormGroup({
  archivo: new FormControl(null, Validators.required),
});

public mensajeArchivo = 'No file selected';
public datosFormulario = new FormData();
public nombreArchivo = '';
public URLPublica = '';
public porcentaje = 0;
public finalizado = false;




public cambioArchivo(event:any) {
  if (event.target.files.length > 0) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.mensajeArchivo = `File uploaded: ${event.target.files[i].name}`;
      this.nombreArchivo = event.target.files[i].name;
      this.datosFormulario.delete('archivo');
      this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
    }
  } else {
    this.mensajeArchivo = 'No file selected';
  }
}

//Sube el archivo a Cloud Storage
public subirArchivo() {
  let archivo = this.datosFormulario.get('archivo');
  let referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
  let tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);

  //Cambia el porcentaje

  tarea.percentageChanges().subscribe((porcentaje:any) => {
    this.porcentaje = Math.round (porcentaje);
    if (this.porcentaje == 100) {
      this.finalizado = true;
    }
  });

  referencia.getDownloadURL().subscribe((URL) => {
    this.URLPublica = URL;
  });
}
}

function AngularFireObject<T>() {
  throw new Error('Function not implemented.');
}

