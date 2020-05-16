import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor( private http: HttpClient ) { }

  getTextBanners() {
    const url = `../../assets/data/banners.json`;
    return this.http.get( url );
  }
}
