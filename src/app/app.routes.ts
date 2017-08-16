import { RouterModule, Routes } from '@angular/router';
import { AboutComponent,
         PortafolioComponent,
         ItemComponent,
         SearchComponent} from './components/index.paginas';


const APP_ROUTES: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'search/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true });
