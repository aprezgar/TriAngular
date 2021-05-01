import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, argSearch: any, argArtist: any, argGenre: any, argNo: any): any {
    const resultSongs: any[] = [];
    const resultSongsDos: any[] = [];
    let resultSongsFinal: any[] = [];


    argSearch = argSearch.toLowerCase(); 
    for(const cancion of value){
      if(argSearch === '' || cancion.title.toLowerCase().indexOf(argSearch) > -1){
        resultSongs.push(cancion);
        console.log(resultSongs, "resultSongs")
      }
    }
    


    console.log("argArtist", argArtist);
    for(const cancion of resultSongs){
      if (argArtist == null || argArtist.nombre.toLowerCase() == cancion.artist.toLowerCase()){
          resultSongsDos.push(cancion);
          console.log(resultSongsDos, "resultSongsDos")
      }
    }
  
    

    console.log("argGenre", argGenre);
    for(const cancion of resultSongsDos){
      if(argGenre == null || argGenre.nombre.toLowerCase() == cancion.genre.toLowerCase()){
        resultSongsFinal.push(cancion);
        console.log(resultSongsFinal, "resultSongsFinal")
      }
    }


    if(argNo != null && argNo == 'All'){
      console.log("entré");
      resultSongsFinal = [] //vacío array
      resultSongsFinal = value
      console.log("resultSongsFinalargNopush", resultSongsFinal)
      argNo = null   
    }   
    return resultSongsFinal;
  }

 

}
