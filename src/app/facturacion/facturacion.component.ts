import { Component, OnInit } from '@angular/core';
import {NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {ImagenesService} from '../services/imagenes/imagenes.service'
import { HashLocationStrategy } from '@angular/common';
import { Imagen } from '../models/imagen';


@Component({
  selector: 'abe-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class FacturacionComponent implements OnInit {
desde:any
hasta: any

errorFechas:boolean = false

  constructor(private ImagenServicio: ImagenesService) {

   }

  ngOnInit() {
  }

  buscarFacturas(){
   if(this.desde==undefined || this.hasta == undefined){
     this.errorFechas = true
   }else{
     this.ImagenServicio.obtenerFacturas(this.desde, this.hasta)
     .subscribe(res=>{this.ImagenServicio.Imagenes = res as Imagen[]
    console.log(this.ImagenServicio.Imagenes)})
    this.errorFechas = false
   }
  }

  errorUpdate(){
    this.errorFechas = false
  }

  // obtenerClientes(){
  //   this.ImagenServicio.)
  //   .subscribe(res =>  this.clienteservicio.clientes = res as Cliente[],
  //             error=> this.errorMsg = error)
  // }

}
