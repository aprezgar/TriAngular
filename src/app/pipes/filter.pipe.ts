import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultSongs = [];
    for(const cancion of value){
      if(cancion.title.indexOf(arg) > -1){
        resultSongs.push(cancion);
      };
    };
    return resultSongs;
  }

}
