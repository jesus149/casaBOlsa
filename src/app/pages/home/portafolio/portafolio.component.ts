import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../../../services/portafolio.service';
declare var $:any;

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  briefcase: string;
  briefcaseColum1: string;
  briefcaseColum2: string;
  briefcaseColum3: string;
  data:string;

  constructor( public PortafolioService: PortafolioService ) {
    this.PortafolioService.getTextPortafolio()
        .subscribe( (resp: any) => {
          this.briefcase = resp.briefcase;
          this.briefcaseColum1 = resp.briefcaseColum1;
          this.briefcaseColum2 = resp.briefcaseColum2;
          this.briefcaseColum3 = resp.briefcaseColum3;
          this.data = resp.data;
        });
  }

  ngOnInit() {
  }

}
