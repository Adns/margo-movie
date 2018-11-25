import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'note'
})
export class NotePipe implements PipeTransform {

  transform(value: number): string[] {
    const res = Array(Math.floor(value)).fill('fa-star');

    if (Math.round(value) === Math.ceil(value) && Math.round(value) !== 0) {
      res.push('fa-star-half-alt');
    }

    return res;
  }

}
