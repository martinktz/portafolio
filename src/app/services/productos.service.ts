import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any = [];
  urlProdix:string="https://paginaweb-9ca1f.firebaseio.com/productos_idx.json";
  urlProducto:string="https://paginaweb-9ca1f.firebaseio.com/productos/";
  cargando_productos:boolean=true;

  constructor( public http: Http ) {
     this.cargar_Productos();
  }

  cargar_Producto(id:string ) {
    return this.http.get( `${this.urlProducto}${id}.json`)

  }

  cargar_Productos() {
      this.cargando_productos=true;

      this.http.get( this.urlProdix )
        .subscribe(data => {
        //console.log( data.json() )
        this.productos= data.json();}
        )
        this.cargando_productos=false;

  }

}
