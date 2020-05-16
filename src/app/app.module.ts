import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { PagenofoundComponent } from './pages/pagenofound/pagenofound.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { TipoCambioComponent } from './pages/home/tipo-cambio/tipo-cambio.component';
import { ReportesComponent } from './pages/home/reportes/reportes.component';
import { BtnTrimestrePipe } from './pipes/btn-trimestre.pipe';
import { BtnYearPipe } from './pipes/btn-year.pipe';
import { orderByPipe } from './pipes/orderby.pipe';
import { RenamePipeTipoCambio } from './pipes/rename.pipe';
import { ClaseInformesPipe } from './pipes/clase-informes.pipe';
import { ClaseVerInformesPipe } from './pipes/clase-ver-informes.pipe';
import { PortafolioComponent } from './pages/home/portafolio/portafolio.component';
import { BannersComponent } from './pages/home/banners/banners.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoriaComponent,
    HomeComponent,
    MenuComponent,
    LoadingComponent,
    PagenofoundComponent,
    ProductoComponent,
    HeroComponent,
    TipoCambioComponent,
    ReportesComponent,
    BtnTrimestrePipe,
    BtnYearPipe,
    orderByPipe,
    ClaseInformesPipe,
    ClaseVerInformesPipe,
    PortafolioComponent,
    BannersComponent,
    RenamePipeTipoCambio
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
