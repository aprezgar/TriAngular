import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    arg = arg.toLowerCase(); 
    const resultSongs = [];
    console.log("value", value);
    console.log("arg", arg);
    for(const cancion of value){
      let nombreCancion = cancion.title.toLowerCase();
      if(nombreCancion.indexOf(arg) > -1){
        resultSongs.push(cancion);
      };
    };
    return resultSongs;
  }

}
