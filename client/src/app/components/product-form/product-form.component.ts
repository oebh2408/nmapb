import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() cuentaWork!: number;  

  respuesta: any;
  id_cuenta: any;
  sede: any;
  num_identificacion: any;
  fecha_apertura: any;
  saldo: any;
  cuota_manejo: any;
  transc_virtuales: any;
  monto_max_retiros: any;
  estado_cuenta: any;

  estado: boolean = true;
  crear: any;
  cuenta: any;

  constructor(private productsService: ProductsService, private datePipe: DatePipe) { }

  ngOnInit(): void {

  }

  getProduct() {
    this.estado = true;
    this.productsService.getProduct(this.cuentaWork).subscribe(
      res => {
        this.respuesta = res;
        this.id_cuenta = this.respuesta[0][0].id_cuenta;
        this.sede = this.respuesta[0][0].fk_name_sede;
        this.num_identificacion = this.respuesta[0][0].fk_num_identificacion;
        this.fecha_apertura = this.respuesta[0][0].fecha_apertura;
        //Tratamiento de fecha
        let date: Date = new Date(this.fecha_apertura);
        this.fecha_apertura = this.datePipe.transform(date, 'yyyy-MM-dd');
        // 
        this.saldo = this.respuesta[0][0].saldo;
        this.cuota_manejo = this.respuesta[0][0].cuota_manejo;
        this.transc_virtuales = this.respuesta[0][0].transc_virtuales;
        this.monto_max_retiros = this.respuesta[0][0].monto_max_retiros;
        this.estado_cuenta = this.respuesta[0][0].estado_cuenta;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  crearCuenta() {
    this.estado = false;
    this.habilitarProducto();

  }

  saveProduct() {
    var producto = {
      'id_cuenta': this.id_cuenta,
      'fk_name_sede': this.sede,
      'fk_num_identificacion': this.num_identificacion,
      'fecha_apertura': this.fecha_apertura,
      'saldo': this.saldo,
      'cuota_manejo': this.cuota_manejo,
      'transc_virtuales': this.transc_virtuales,
      'monto_max_retiros': this.monto_max_retiros,
      'estado_cuenta': this.estado_cuenta
    }

    var comprobado = this.comprobation()

    if (comprobado == true) {
      this.productsService.saveProduct(producto).subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      );
      this.habilitarProducto();
    } else {
      console.log("No se pudo agregar")
    }
    this.habilitarProducto();
  }

  updateProduct() {
    var producto = {
      'id_cuenta': this.id_cuenta,
      'fk_name_sede': this.sede,
      'fk_num_identificacion': this.num_identificacion,
      'fecha_apertura': this.fecha_apertura,
      'saldo': this.saldo,
      'cuota_manejo': this.cuota_manejo,
      'transc_virtuales': this.transc_virtuales,
      'monto_max_retiros': this.monto_max_retiros,
      'estado_cuenta': this.estado_cuenta
    }

    var comprobado = this.comprobation()

    if (comprobado == true) {
      this.productsService.updateProduct(this.id_cuenta, producto).subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      );
      this.habilitarProducto();
    } else {
      console.log("No se pudo agregar")
    }
    this.habilitarProducto();
  }

  deleteProduct() {
    this.productsService.deleteProduct(this.id_cuenta).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
    this.habilitarProducto();
  }

 //Funciones extras
  habilitarProducto() {
    this.estado=false;
    this.id_cuenta = null;
    this.sede = null;
    this.num_identificacion = null;
    this.fecha_apertura = null;
    this.saldo = null;
    this.cuota_manejo = null;
    this.transc_virtuales = null;
    this.monto_max_retiros = null;
    this.estado_cuenta = null;
  }

  comprobation() {
    var comprobacion = false;
    if (this.id_cuenta.toString().length >= 2 && this.id_cuenta.toString().length <= 10){
      if (this.sede.length >= 2 && isNaN(this.sede) == true){
        if (this.num_identificacion.toString().length >= 2 && this.num_identificacion.toString().length <= 10) {
          if (this.fecha_apertura != null) {
            if (this.saldo.toString().length >= 2 && this.saldo.toString().length <= 10) {
              if (this.cuota_manejo.toString().length >= 2 && this.cuota_manejo.toString().length <= 10) {
                if (this.transc_virtuales.length >= 1 && isNaN(this.transc_virtuales) == true) {
                  if (this.monto_max_retiros.toString().length >= 2 && this.monto_max_retiros.toString().length <= 10) {
                    if (this.estado_cuenta.length >= 1 && isNaN(this.estado_cuenta) == true) {                      
                        comprobacion = true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return comprobacion;
  }
}



