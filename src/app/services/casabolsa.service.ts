import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CasabolsaService {

  QUERY = `${ URL_SERVICE }/query`;

  constructor( private http: HttpClient ) {}

  getMenu() {
    const data = {
      site: '6',
      entity: 'cb_categorias',
      operation: 'getAll'
    };
    return this.http.post( this.QUERY, data, {
      headers: { 'Content-type': 'text/plain' }
    }).pipe(
        map( (resp: any) => {
          return resp;
        })
        
    );
  }

  getProducto(idSubPro: number){
    let idSub = `id=${idSubPro}`;
  
    const data = {
      site: '6',
      entity: 'cb_subcategorias',
      operation: 'getEntitiesByOptions',
      options: idSub,
    };
        return this.http.post( this.QUERY, data, {
      headers: { 'Content-type': 'text/plain' }
    }).pipe(
        map( (resp: any) => {
          return resp;
        })
    );
  };
  

}


