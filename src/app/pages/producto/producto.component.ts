import { Component, OnInit, Input } from '@angular/core';
import { PortafolioService } from '../../services/portafolio.service';
import { HistoriaService } from 'src/app/services/historia.service';
import { CasabolsaService } from 'src/app/services/casabolsa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  briefcase: string;
  briefcaseColum1: string;
  briefcaseColum2: string;
  briefcaseColum3: string;
  data:string;
  foot:string;
  menus: any[];
  dataProId:any[];
  loading:boolean;
  @Input() product: string;

  constructor( 
    public PortafolioService: PortafolioService,
    public _historiaService: HistoriaService,
    public cbServices: CasabolsaService, 
    private route:ActivatedRoute
     ) {
    this.loading = true;
    this._historiaService.getTextoHistoria()
        .subscribe( (resp: any) => {
          this.foot = resp.foot;
        });
    this.cbServices.getMenu()
        .subscribe( menu => {
          this.menus = menu.data;
          this.product='Productos';
          this.loading = false;
        });   

  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      let id = params['id'];
      this.cbServices.getProducto(id).subscribe(idSubPro=>{
        this.dataProId = idSubPro.data;
      })
    })
  }

  

}
