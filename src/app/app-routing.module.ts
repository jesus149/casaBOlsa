import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { PagenofoundComponent } from './pages/pagenofound/pagenofound.component';
import { ProductoComponent } from './pages/producto/producto.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'historia', component: HistoriaComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: '**', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
