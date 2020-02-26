import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.key.indexOf(filter) !== -1 || item.value.filter(i => JSON.stringify(i).indexOf(filter) !== -1).length);
  }
}
