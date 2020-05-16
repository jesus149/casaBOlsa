import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'claseVerInformes'
})
export class ClaseVerInformesPipe implements PipeTransform {

  transform(value: any): any {
    const fecha = new Date(value);
    let trimestre = '';

    switch ( fecha.getMonth() ) {
      case 0:
      case 1:
      case 2:
        trimestre = 'Primero';
        break;
      case 3:
      case 4:
      case 5:
        trimestre = 'Segundo';
        break;
      case 6:
      case 7:
      case 8:
        trimestre = 'Tercero';
        break;
      case 9:
      case 10:
      case 11:
        trimestre = 'Cuarto';
        break;
    }

    // return `${fecha.getMonth()}|${fecha.getFullYear()}`;
    return `${trimestre}-${fecha.getFullYear()}`;
  }

}
