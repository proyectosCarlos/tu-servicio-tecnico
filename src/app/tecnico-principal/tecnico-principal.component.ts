import { Component, OnInit } from '@angular/core';
import { TecnicoService } from '../services/tecnico/tecnico.service'
import { Tecnico } from '../models/tecnico'
import { ClienteService } from '../services/cliente/cliente.service'
import { Cliente } from '../models/cliente'

@Component({
  selector: 'abe-tecnico-principal',
  templateUrl: './tecnico-principal.component.html',
  styleUrls: ['./tecnico-principal.component.scss']
})
export class TecnicoPrincipalComponent implements OnInit {
  userTec: string
  errorMsg: any
  constructor(private tecnicoServicio: TecnicoService, private clienteservicio: ClienteService) {
    this.userTec = localStorage.getItem('tstui')

  }

  ngOnInit() {
  }

  obtenerPendientes(){
    this.clienteservicio.obtenerPendientesTec(this.userTec)
    .subscribe(res =>  this.clienteservicio.pendientes = res as Cliente[],
              error=> this.errorMsg = error)
  }

  obtenerClientes(){
    this.clienteservicio.obtenerClientesTec(this.userTec)
    .subscribe(res =>  this.clienteservicio.clientes = res as Cliente[],
              error=> this.errorMsg = error)
  }

  obtenerGarantias(){
    this.clienteservicio.obtenerGarantiasTec(this.userTec)
    .subscribe(res =>{
      this.clienteservicio.garantias = res as Cliente[]
    } ,
              error=> this.errorMsg = error)
  }

}
