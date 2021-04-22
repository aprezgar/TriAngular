import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, argSearch: any, argArtist: any, argGenre: any, argNo: any): any {
    const resultSongs: any[] = [];
    const resultSongsDos: any[] = [];
    const resultSongsFinal: any[] = [];

    /*console.log(argNo, "argNo")*/

    /*if(argSearch == "" && argArtist == null && argGenre == null && argNo == null){
      for(const cancion of value){
        resultSongs.push(cancion);
      }
    }*/
    
   /* else if (argNo !== null){
      console.log("entro en argNo")
      for(const cancion of value){
        resultSongs.push(cancion);
      }
    }*/

    /*if (argSearch !== ""){*/
      argSearch = argSearch.toLowerCase(); 
      console.log("value", value);
      console.log("argSearch", argSearch);  
      for(const cancion of value){
        if(argSearch === '' || cancion.title.toLowerCase().indexOf(argSearch) > -1){
          resultSongs.push(cancion);
          console.log(resultSongs, "resultSongs")
        }
      }
    //}


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
          console.log(resultSongsDos, "resultSongsDos")

        }
      }

      console.log("argNo", argNo);
      if(argNo !== null && argNo.tipo == 'No filters'){
        resultSongsFinal.length = 0; //vacío array
        for(const cancion of value){
          resultSongsFinal.push(cancion);
        }
      }
   
      
    

    return resultSongsFinal;
  }

 

}
