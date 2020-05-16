import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from '../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  QUERY = `${ URL_SERVICE }/query`;

  constructor( private http: HttpClient ) { }

  getReportes() {
    const data = {
      site: '6',
      entity: 'cb_informes',
      operation: 'getAll',
      page_size: '2000',
      orderBy: 'fp,DESC'
    };

    return this.http.post( this.QUERY, data, {
      headers: { 'Content-type': 'text/plain' }
    }).pipe(
      map( resp => {
        console.log('query r')
        console.log(resp);
        return resp;
      })
    );
  }

  getTextReports() {
    const url = `../../assets/data/reportes.json`;
    return this.http.get( url );
    
  }

}
