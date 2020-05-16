import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../services/hero.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  title: string;
  subtitle: string;
  image: string;

  constructor( public _heroService: HeroService ) {
    this._heroService.getTextHero()
        .subscribe( (resp: any) => {
          this.title = resp.title;
          this.subtitle = resp.subtitle;
          this.image = resp.image;
        });
  }


  ngOnInit() {
  }

}
