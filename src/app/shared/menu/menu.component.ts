import { Component, OnInit, Input } from '@angular/core';
import { CasabolsaService } from '../../services/casabolsa.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: any[];
  verMenu = false;
  title: string;
  titleUrl: string;
  informative: string;
  informativeUrl: string;
  history: string;
  historyUrl: string;
  product: string;
  productUrl: string;
  loading:boolean;

  constructor( 
    public cbServices: CasabolsaService,
    public _menuService: MenuService
     ) {
    this.loading = true;
    this.cbServices.getMenu()
        .subscribe( menu => {
          this.menus = menu.data;
          //console.log('servicio menu desde MenuComponent')
          //console.log(this.menus);
          this.loading = false;
        }); 
    this._menuService.getTextMenu()
        .subscribe( (resp: any) => {
          this.title = resp.title;
          this.titleUrl = resp.titleUrl;
          this.informative = resp.informative;
          this.informativeUrl = resp.informativeUrl;
          this.history = resp.history;
          this.historyUrl = resp.historyUrl;
          this.product = resp.product;
          this.productUrl = resp.productUrl;
        });
  }

  ngOnInit() {
  }

  abreMenu() {
    if ( this.verMenu === true ) {
      this.verMenu = false;
    } else {
      this.verMenu = true;
    }
  }

}
