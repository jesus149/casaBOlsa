import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btnYear'
})
export class BtnYearPipe implements PipeTransform {

  transform(value: any): any {

    const fecha = new Date(value);
    let year = '';

    switch ( fecha.getFullYear() ) {
      case 0:
      case 1:
      case 2:
        year = 'Primero';
        break;
      case 3:
      case 4:
      case 5:
        year = 'Segundo';
        break;
      case 6:
      case 7:
      case 8:
        year = 'Tercero';
        break;
      case 9:
      case 10:
      case 11:
        year = 'Cuarto';
        break;
    }

    return `${fecha.getFullYear()}`;
  }

}
