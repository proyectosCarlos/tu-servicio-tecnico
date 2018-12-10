import { Component, OnInit } from '@angular/core';
import { TecnicoService } from '../services/tecnico/tecnico.service'
import { Tecnico } from '../models/tecnico'
import { ClienteService } from '../services/cliente/cliente.service'
import { Cliente } from '../models/cliente'




@Component({
  selector: 'abe-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  errorMsg

  constructor(private tecnicoServicio: TecnicoService, private clienteServicio: ClienteService) {

   }

  ngOnInit() {
  }

  obtenerTecnicos(){
    this.tecnicoServicio.obtenerTecnicos()
    .subscribe(res =>  this.tecnicoServicio.Tecnicos = res as Tecnico[],
              error=> this.errorMsg = error)
  }

  obtenerGarantias(){
    this.clienteServicio.obtenerGarantias()
    .subscribe(res =>{
      this.clienteServicio.garantias = res as Cliente[]
    } ,
              error=> this.errorMsg = error)
  }

  obtenerClientes(){
    this.clienteServicio.obtenerClientes()
    .subscribe(res =>  this.clienteServicio.clientes = res as Cliente[],
              error=> this.errorMsg = error)
  }

  obtenerPendientes(){
    this.clienteServicio.obtenerPendientes()
    .subscribe(res =>  this.clienteServicio.pendientes = res as Cliente[],
              error=> this.errorMsg = error)
  }




}
