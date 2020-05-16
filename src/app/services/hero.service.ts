import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private http: HttpClient ) { }

  getTextHero() {
    const url = `../../assets/data/hero.json`;
    return this.http.get( url );
  }
}
