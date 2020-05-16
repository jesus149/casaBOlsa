import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  constructor( private http: HttpClient ) { }

  getTextoHistoria() {
    const url = `../../assets/data/historia.json`;
    return this.http.get( url );
  }
}
