import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent  {

  constructor( public _is:InformacionService,
               public router:Router ) {

  }

  buscar_Producto( termino: string ) {
    this.router.navigate(['search',termino]);
  }

}
