import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../../services/reportes.service';
import { BtnTrimestrePipe } from '../../../pipes/btn-trimestre.pipe';
import { ClaseInformesPipe } from '../../../pipes/clase-informes.pipe';
import { BtnYearPipe } from '../../../pipes/btn-year.pipe';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
  providers: [BtnTrimestrePipe, ClaseInformesPipe, BtnYearPipe]
})
export class ReportesComponent implements OnInit {

  reportes: any[] = [];
  btnTrimestre: any[] = [];
  btnYear: any[] = [];
  year: any[] = [];
  trimesteInfo = '';
  yearInfo = '';
  //btnActivo: boolean = false; 
  idTrimestre: number;
  idYear: number;
  yearFilter: number;
  verItem = false;
  clase = 'nover-informe';
  ultimoTrimestre: string;
  ultimoYear: string
  name: string;
  image: string;
  text: string;
  url: string;
  loading: boolean;

  public isCollapsed = -1;
  public items = ['item 1', 'item 2', 'item 3'];

  constructor(public _reporteService: ReportesService,
    public btnPipe: BtnTrimestrePipe,
    public btnYearPipe: BtnYearPipe,
    public clasePipe: ClaseInformesPipe,
  ) {
    this.loading = true;

    this._reporteService.getReportes()
      .subscribe((resp: any) => {
        this.reportes = resp.data;
        // console.log(this.reportes.transform(resp.data[i].fp));
        for (let i = 0; i < this.reportes.length; i++) {
          this.btnYear.push(this.btnYearPipe.transform(resp.data[i].fp));
          this.btnTrimestre.push(this.btnPipe.transform(resp.data[i].fp));
          // console.log(this.btnPipe.transform(resp.data[i].fp));
        }
        console.log('reportes', this.reportes)

        var data = [];
        data.push({ preguntas: [] });
        data[0].preguntas.push(this.btnYear[0]);
        data[0].preguntas.push(this.btnTrimestre[0]);

        console.log('data', data);


        this.btnYear.forEach(x => {
          if (!this.year.hasOwnProperty(x)) {
            this.year[x] = {
              reportes: [

              ]
            }
          }
          //Agregamos los datos de reportes. 
          this.year[x].reportes.push({
          })

        })
        console.log('year', this.year)

        let trimestre = {}
        this.btnTrimestre.forEach(x => {
          if (!trimestre.hasOwnProperty(x)) {
            trimestre[x] = {
              reportes: [

              ]
            }
          }
          //Agregamos los datos de reportes. 
          trimestre[x].reportes.push({
          })

        })
        console.log('Trimestre', trimestre)

        function prettyDate(date) {
          var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          return months[date.getUTCMonth()] + ' ' + date.getUTCFullYear();
        }
        console.log("this date", prettyDate(new Date(1554012000000)));


        console.log('Trimestre array', this.btnTrimestre)
        console.log('Year array', this.btnYear)

        console.log('btnTrimestre new set', this.btnTrimestre)
        this.btnTrimestre = [...new Set(this.btnTrimestre)];

        console.log('btnTrimestre despues new set', this.btnTrimestre)
        // this.btnTrimestre = this.btnTrimestre.splice(0, 0);

        console.log('TRIMESTRES POR AÑO btnYear', this.btnYear)
        this.btnYear = [...new Set(this.btnYear)];

        console.log('TODOS LOS AÑOS EN EL ARRAY btnYear', this.btnYear)
        this.btnYear = this.btnYear.splice(0, 4);

        var size = 3;
        this.btnYear = this.btnYear.slice(0, size).map(i => {
          return i
        })

        this.btnYear.sort();

        this.trimesteInfo = this.btnTrimestre[0];
        this.yearInfo = this.btnYear[0];

        console.log('trimesteInfo', this.trimesteInfo)
        console.log('yearInfo', this.yearInfo)

        this.loading = false;
      });
    this._reporteService.getTextReports()
      .subscribe((resp: any) => {
        this.name = resp.name;
        this.image = resp.image;
        this.text = resp.text;
        this.url = resp.url;

      });

  }

  ngOnInit() {
  }


  trimestreBtn(tri) {

    console.log("tri: ", tri)

    const trimestreClick = `.${this.clasePipe.transform(tri)}`;
    const elemt = document.querySelectorAll(trimestreClick);
    const informesVer = document.querySelectorAll('.ver-informe');

    for (let i = 0; i < informesVer.length; i++) {
      informesVer[i].classList.remove('ver-informe');
      informesVer[i].classList.add('nover-informe');
    }
    for (let i = 0; i < elemt.length; i++) {
      elemt[i].classList.remove('nover-informe');
      elemt[i].classList.add('ver-informe');
    }

    console.log('trimestreClick ', trimestreClick);
    console.log('elemt ', elemt);
    console.log('informesVer ', informesVer);
  }

  yearBtn(year) {

    const yearClick = `.${this.clasePipe.transformYear(year)}`;
    const elemt = document.querySelectorAll('P');
    const informesVer = document.querySelectorAll('.ver-informe');

    console.log('yearClick ', yearClick);
    console.log('elemt ', elemt);
    //console.log('informesVer ', informesVer );

    for (let i = 0; i < informesVer.length; i++) {
      informesVer[i].classList.remove('ver-informe');
      informesVer[i].classList.add('nover-informe');
    }
    for (let i = 0; i < elemt.length; i++) {
      elemt[i].classList.remove('nover-informe');
      elemt[i].classList.add('ver-informe');
    }
  }

  addClass(id: number) {
    this.idTrimestre = id;
  }

  addClassYear(idYear: number, year: number) {
    this.idYear = idYear;
    this.yearFilter = year
  }

  isSameTri(triA: string, triB: string) {
    if (triA === triB) {
      this.clase = 'ver-informe';
    } else {
      this.clase = 'nover-informe';
    }
    return this.clase;
  }

  isSameYear(yearA: string, yearB: string) {
    var arr = yearB.split("-");
    yearB = arr[1];

    if (yearA === yearB) {
      this.clase = 'ver-trimestre';
    } else {
      this.clase = 'nover-trimestre';
    }
    return this.clase;
  }

}
