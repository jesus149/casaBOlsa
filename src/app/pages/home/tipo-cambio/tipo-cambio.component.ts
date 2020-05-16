import { Component, OnInit } from '@angular/core';
import { TipoCambioService } from '../../../services/tipo-cambio.service';

@Component({
  selector: 'app-tipo-cambio',
  templateUrl: './tipo-cambio.component.html',
  styleUrls: ['./tipo-cambio.component.css']
})
export class TipoCambioComponent implements OnInit {

divisas: any[];
indices: any[];
divisasArray: string;
indicesArray: string;

  constructor( public _tpService: TipoCambioService ) {
    this._tpService.getTipoDivisas()
    .subscribe( (resp: any) => {
      this.divisas = resp.formData;
    });
    this._tpService.getIndiceBolsa()
    .subscribe( indice => {
      this.indices = indice.formData;
      console.log('getIndiceBolsa COMPONENTE',this.indices)
    });  
    this._tpService.getDivisas()
    .subscribe( (resp: any) => {
      this.divisasArray = resp.divisasArray;    
      console.log('divisasArray',this.divisasArray) 
    });
    this._tpService.getIndices()
    .subscribe( (resp: any) => {
      this.indicesArray = resp.indicesArray;  
      console.log('indicesArray',this.indicesArray) 
   
    });
  }

  
  
  ngOnInit() {
  }

}
