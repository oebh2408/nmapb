import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  datosAPI: any;
  cuentas: any = [];
  dato: any;
  cuentaWork!: number;
  tamano!: number;
  consulto: boolean = false;


  constructor(private productServices: ProductsService) { 
  }
 
  ngOnInit(): void {
  }

  traerBusqueda() {
    this.consulto = true;
    var busqueda = localStorage.getItem("busquedaCliente");
    localStorage.removeItem("busquedaCliente");
    this.productServices.getProducts(parseInt(busqueda!)).subscribe(
      res => {
        this.datosAPI = res;
        this.tamano = this.datosAPI[0].length;
        for (let i = 0; i < this.tamano; i++) {
          this.dato = this.datosAPI[0][i].id_cuenta.toString();
          this.cuentas.push(parseInt(this.dato));
        }
      },
      err => {
        console.error(err);
      }
    )
  }

  seleccionCuenta(cuenta: number):void {
    this.cuentaWork = cuenta;
  }

}
