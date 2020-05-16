import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tipoCambio'
})
export class RenamePipeTipoCambio implements PipeTransform {
    transform(value: any, args?: any): any {
        switch (value) {
            //DIVISAS
            case 'EURMXN':
                return 'Euro';
            case 'GBPMXN':
                return 'Libra';
            case 'JPYMXN':
                return 'Yen';  
            case 'MXNUS':
                return 'Dólar';  
            //INDICES 
            case 'C':
                return 'C(USA)';  
            case 'C*':
                return 'C(MXM)';  
            case 'DOW JONES':
                return 'Dow Jones'; 
            case 'IPC':
                return 'IPC';
            case 'NASDAQ 100 Index':
                return 'Nasdaq';                         
            default:
                return value;
        }
    }
}
