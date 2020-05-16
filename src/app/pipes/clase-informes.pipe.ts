import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'claseInformes'
})
export class ClaseInformesPipe implements PipeTransform {

  transform(value: any): any {

    const clase = value.split(' ');

    return `${clase[0]}-${clase[1]}`;
  }

}
