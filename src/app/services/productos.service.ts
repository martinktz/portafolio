import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any = [];
  productos_filtrado:any = [];
  urlProdix:string="https://paginaweb-9ca1f.firebaseio.com/productos_idx.json";
  urlProducto:string="https://paginaweb-9ca1f.firebaseio.com/productos/";
  cargando_productos:boolean=true;

  constructor( public http: Http ) {
     this.cargar_Productos();
  }

  public buscar_Producto( termino:string ){

    if ( this.productos.length === 0 ) {
      this.cargar_Productos().then( () => {
        //termino la carga
        //console.log(termino)
        this.filtrar_Productos(termino);
      });
    }else{
      this.filtrar_Productos(termino);
    }
  }

  private filtrar_Productos(termino:string) {

    this.productos_filtrado = [];

    termino = termino.toLowerCase();

    this.productos.forEach( prod => {

      if (prod.categoria.indexOf( termino ) >=0 || prod.titulo.toLowerCase().indexOf( termino ) >=0) {

        this.productos_filtrado.push( prod );
        //console.log( prod )
      }
      //console.log( prod )
    })
  }

  public cargar_Producto(id:string ) {
    return this.http.get( `${this.urlProducto}${id}.json`)

  }

  cargar_Productos() {
      this.cargando_productos=true;

      let promesa = new Promise( ( resolve, reject )=>{

        this.http.get( this.urlProdix )
          .subscribe(data => {
          //console.log( data.json() )
          this.productos= data.json();
          this.cargando_productos=false;
          resolve();
        })

      });

   return promesa;

  }

}
