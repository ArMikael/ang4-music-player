import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(singers: any[], searchQuery: any): any {
    if (searchQuery) {
      return singers.filter(function(singer){
        return singer.name.indexOf(searchQuery) > -1;
      });
    } else {
      return singers;
    }

  }
}
