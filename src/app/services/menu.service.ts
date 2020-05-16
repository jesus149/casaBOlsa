import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor( private http: HttpClient ) { }

  getTextMenu() {
    const url = `../../assets/data/menu.json`;
    return this.http.get( url );
  }
}
