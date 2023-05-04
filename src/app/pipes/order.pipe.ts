import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], ascending: boolean = true): any[] {
    if (!array || array.length <= 1) {
      return array;
    }

    const sortedArray = array.slice().sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      if (dateA < dateB) {
        return ascending ? -1 : 1;
      } else if (dateA > dateB) {
        return ascending ? 1 : -1;
      } else {
        return 0;
      }
    });

    return sortedArray;
  }
}