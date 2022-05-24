
import { Component, OnInit } from '@angular/core';

import { DatePipe } from '@angular/common';

import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  client: any = [];
  busquedaCliente: number = 0;

  respuesta: any;

  num_identificacion: any;
  nombres: any;
  apellidos: any;
  fecha_nacimiento: any;
  tipo_identificacion: any;
  pais_nacimiento: any;
  estado_civil: any;
  direccion: any;
  email: any;
  telefono: any; 

  estado: boolean= true;

  constructor(
    private clientsService: ClientsService,
    private datePipe: DatePipe
    ) { }

  ngOnInit() {

  }

  getSucursales() {
    
  }

  getClient() {
    this.clientsService.getClient(this.busquedaCliente).subscribe(
      res => {
          this.respuesta = res;
          this.num_identificacion = this.respuesta[0].num_identificacion;
          this.nombres = this.respuesta[0].nombres;
          this.apellidos = this.respuesta[0].apellidos;
          this.fecha_nacimiento = this.respuesta[0].fecha_nacimiento;
          //Tratamiento de fecha
          let date: Date = new Date(this.fecha_nacimiento);
          this.fecha_nacimiento = this.datePipe.transform(date, 'yyyy-MM-dd');
          //
          this.tipo_identificacion = this.respuesta[0].tipo_identificacion;
          this.pais_nacimiento = this.respuesta[0].pais_nacimiento;
          this.estado_civil = this.respuesta[0].estado_civil;
          this.direccion = this.respuesta[0].direccion;
          this.email = this.respuesta[0].email;
          this.telefono = this.respuesta[0].telefono;
          this.estado = true;
          console.log(res);
      },
      err => console.error(err)
    );
    localStorage.setItem("busquedaCliente", this.busquedaCliente.toString());
  }

  saveClient() {
    var cliente = {
      'num_identificacion': this.num_identificacion,
      'nombres': this.nombres,
      'apellidos': this.apellidos,
      'fecha_nacimiento': this.fecha_nacimiento,
      'tipo_identificacion': this.tipo_identificacion,
      'pais_nacimiento': this.pais_nacimiento,
      'estado_civil': this.estado_civil,
      'direccion': this.direccion,
      'email': this.email,
      'telefono': this.telefono
    }

    var comprobado = this.comprobation()

    if (comprobado == true) {
      this.clientsService.saveClient(cliente).subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      );
      this.habilitarCliente();
    } else {
      console.log("No se pudo agregar")
    }
    
  }

  updateClient() {
    var cliente = {
      'num_identificacion': this.num_identificacion,
      'nombres': this.nombres,
      'apellidos': this.apellidos,
      'fecha_nacimiento': this.fecha_nacimiento,
      'tipo_identificacion': this.tipo_identificacion,
      'pais_nacimiento': this.pais_nacimiento,
      'estado_civil': this.estado_civil,
      'direccion': this.direccion,
      'email': this.email,
      'telefono': this.telefono
    }
      this.clientsService.updateClient(cliente.num_identificacion, cliente).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.error(err);
        }
      );
  }

  deleteClient() {
    this.clientsService.deleteClient(this.num_identificacion).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.error(err);
      }
    )
  }


  habilitarCliente() {
    this.estado=false;
    this.num_identificacion = null;
    this.nombres = null;
    this.apellidos = null;
    this.fecha_nacimiento = null;
    this.tipo_identificacion = null;
    this.pais_nacimiento = null;
    this.estado_civil = null;
    this.direccion = null;
    this.email = null;
    this.telefono = null;
  }

  comprobation() {
    var comprobacion = false;
    if (this.num_identificacion.toString().length >= 5 && this.num_identificacion.toString().length <= 10){
      if (this.nombres.length >= 2 && isNaN(this.nombres) == true){
        if (this.apellidos.length >= 2 && isNaN(this.apellidos) == true) {
          if (this.fecha_nacimiento != null) {
            if (this.tipo_identificacion.length >= 2 && isNaN(this.tipo_identificacion) == true) {
              if (this.pais_nacimiento.length >= 2 && isNaN(this.pais_nacimiento) == true) {
                if (this.estado_civil.length >= 2 && isNaN(this.estado_civil) == true) {
                  if (this.direccion.length >= 2 && isNaN(this.direccion) == true ) {
                    if (this.email.length >= 2 && isNaN(this.email) == true) {
                      if (this.telefono.toString().length >= 2 && this.telefono.toString().length) {
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
    }
    return comprobacion;
  }

}
