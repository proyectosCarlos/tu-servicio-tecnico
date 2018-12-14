import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente'
import { ClienteService } from '../../services/cliente/cliente.service'
import { TecnicoService } from '../../services/tecnico/tecnico.service'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'abe-clientes-tecnico',
  templateUrl: './clientes-tecnico.component.html',
  styleUrls: ['./clientes-tecnico.component.scss']
})
export class ClientesTecnicoComponent implements OnInit {
  errorMsg:any
  nombre: String
  apellido:String
  telefono: String
  public searchText : string;
  dataSource:any
  estadoGarantia: Number
  userTec:string

  constructor(public clienteservicio: ClienteService, public tecnicoServicio: TecnicoService, public modalService: NgbModal) {
    this.userTec = localStorage.getItem('tstui')
   }

  ngOnInit() {
    this.obtenerClientes()
  }


  obtenerClientes(){
    this.clienteservicio.obtenerClientesTec(this.userTec)
    .subscribe(res =>  this.clienteservicio.clientes = res as Cliente[],
              error=> this.errorMsg = error)
  }

  BuscarCliente(cliente: Cliente){
    this.clienteservicio.clienteSeleccionado = cliente

    this.tecnicoServicio.obtenertecnico(this.clienteservicio.clienteSeleccionado.tecnico)
    .subscribe(res=>{
      this.nombre = res['nombreTecnico']
      this.apellido = res['apellidoTecnico']
      this.telefono  = res['telefonoTecnico']
    },
      err=>{
        console.log(err)
      })

  }

  ActualizarGarantia(cliente:Cliente){
    cliente.estado= '2'
    this.actualizarCliente(cliente)

  }

  actualizarCliente(cliente:Cliente){
    this.clienteservicio.editarCliente(cliente)
    .subscribe(res=>{console.log(res)
    this.obtenerClientes()},
      err=>{
        this.obtenerClientes()
       this.estadoGarantia= err.status})
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

}
