import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  constructor( private http: HttpClient ) { }

  getTextPortafolio() {
    const url = `../../assets/data/portafolio.json`;
    return this.http.get( url );
  }
}
