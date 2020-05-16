import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoCambioService {

  constructor( public http: HttpClient ) { }

  getTipoDivisas() {
    const url = 'https://finanzasenlinea.infosel.com/banamex/WSFeedJSON/service.asmx/DivisasLast';
   //const formData = new URLSearchParams();

   //formData.append('callback', '');

   const formData = {
      callback: '',
    };
 
    return this.http.post( url, formData, {
      headers: { Accept: 'application/json' }
    }).pipe(
      map( ( tipoCambio: any ) => {
        console.log('TIPO DIVISA SERVICIO',tipoCambio)
        return tipoCambio;
      })
    );
  }

  getIndiceBolsa() {
    const url = 'https://finanzasenlinea.infosel.com/banamex/WSFeedJSON/service.asmx/IndicesLast';
    const formData = new URLSearchParams();

    formData.append('callback', '');

    return this.http.post( url, formData, {
      headers: { Accept: 'application/json', }
    }).pipe(
      map( ( tipoCambio: any ) => {
        console.log('TIPO INDICE SERVICIO',tipoCambio)
        return tipoCambio;
      })
    );
  }

  getDivisas() {
    const url = `../../assets/data/divisas.json`;
    return this.http.get( url );
    
  }

  getIndices() {
    const url = `../../assets/data/indices.json`;
    return this.http.get( url );
    
  }

}
