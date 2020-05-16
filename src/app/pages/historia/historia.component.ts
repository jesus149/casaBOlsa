import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../../services/historia.service';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  textSubtitle: string;
  title: string;
  image: string;
  foot: string;

  constructor( public _historiaService: HistoriaService ) {
    this._historiaService.getTextoHistoria()
        .subscribe( (resp: any) => {
          this.paragraph1 = resp.paragraph1;
          this.paragraph2 = resp.paragraph2;
          this.paragraph3 = resp.paragraph3;
          this.textSubtitle = resp.Subtitle;
          this.title = resp.title;
          this.foot = resp.foot;
          this.image = resp.image;
        });
  }

  ngOnInit() {
  }

}
