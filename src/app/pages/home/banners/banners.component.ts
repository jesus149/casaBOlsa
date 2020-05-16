import { Component, OnInit } from '@angular/core';
import { BannersService } from '../../../services/banners.service';
declare var $:any;
import { HistoriaService } from '../../../services/historia.service';


@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  public data:any={};
  
  guide: string;
  test: string;
  guidePdf: string;
  testPdf: string;
  here: string;
  site: string;
  name: string;
  image: string;
  url: string;
  modalText: string;
  cancel: string;
  accept: string;
  imagesBanners: string;
  textBolsaMexicana: string;
  text2: string;
  titleNotices: string;
  notices1: string;
  Urlnotices1: string;
  titleTrades: string;
  pdfTrades: string;
  normativity: string;
  Urlnormativity1: string;
  Urlnormativity2: string;
  pdfNormativity: string;
  Urlnormativity3: string;
  text3: string;
  titleTradesName: string;
  normativityTitle1: string;
  normativityTitle2: string;
  normativityTitle3: string;
  normativityTitle4: string;
  id: string;
  banners: string;
  bannersTitle: string;
  bannersPdf: string;
  icon:string;
  noticesBanners:string;
  notices:string;
  pdfnotices:string;
  bannersTitleWp:string;
  bannersPdfWp: string;
  hereWp: string;
  iconWp: string;
  noticesBannersTwo:string;
  TradesBanners:string;
  normativityBanners:string;
  normativityTitleName1:string;
  normativityTitleName2:string;
  normativityTitleName3:string;
  normativityTitleName4:string;
  foot:string;

  public modal(){
    $('#myModal').modal('hide');
    $('#ModalNotices').modal('hide');
    $('#ModalNotices1').modal('hide');
    $('#ModalNotices2').modal('hide');
    $('#ModalNotices4').modal('hide');
  }

  constructor( 
    public _bannerService: BannersService,
    public _historiaService: HistoriaService 
    ) {
    this._bannerService.getTextBanners()
        .subscribe( (resp: any) => {
          this.guide = resp.guide;
          this.test = resp.test;
          this.guidePdf = resp.guidePdf;
          this.testPdf = resp.testPdf;
          this.here = resp.here;
          this.site = resp.site;
          this.modalText = resp.modalText;
          this.cancel = resp.cancel;
          this.accept = resp.accept;
          this.name = resp.name;
          this.image = resp.image;
          this.url = resp.url;
          this.imagesBanners = resp.imagesBanners;
          this.textBolsaMexicana = resp.textBolsaMexicana;
          this.text2 = resp.text2;
          this.titleNotices = resp.titleNotices;
          this.notices1 = resp.notices1;
          this.Urlnotices1 = resp.Urlnotices1;
          this.titleTrades = resp.titleTrades;
          this.normativity = resp.normativity;
          this.Urlnormativity1 = resp.Urlnormativity1;
          this.Urlnormativity2 = resp.Urlnormativity2;
          this.pdfNormativity = resp.pdfNormativity;
          this.Urlnormativity3 = resp.Urlnormativity3;
          this.text3 = resp.text3;
          this.titleTradesName = resp.titleTradesName;
          this.normativityTitle1 = resp.normativityTitle1;
          this.normativityTitle2 = resp.normativityTitle2;
          this.normativityTitle3 = resp.normativityTitle3;
          this.normativityTitle4 = resp.normativityTitle4;
          this.normativityTitleName1 = resp.normativityTitleName1;
          this.normativityTitleName2 = resp.normativityTitleName2;
          this.normativityTitleName3 = resp.normativityTitleName3;
          this.normativityTitleName4 = resp.normativityTitleName4;
          this.id = resp.id;
          this.banners = resp.banners;
          this.bannersTitle = resp.bannersTitle;
          this.bannersPdf = resp.bannersPdf;
          this.icon = resp.icon;
          this.noticesBanners = resp.noticesBanners;
          this.notices = resp.notices;
          this.pdfnotices = resp.pdfnotices;
          this.noticesBannersTwo = resp.noticesBannersTwo;
          this.TradesBanners = resp.TradesBanners;
          this.normativityBanners = resp.normativityBanners;
          this.bannersTitleWp = resp.bannersTitleWp;
          this.bannersPdfWp = resp.bannersPdfWp;
          this.hereWp = resp.hereWp;
          this.iconWp = resp.iconWp;
        });
    this._historiaService.getTextoHistoria()
        .subscribe( (resp: any) => {
          this.foot = resp.foot;
        });
  }

  ngOnInit() {
  }

}
