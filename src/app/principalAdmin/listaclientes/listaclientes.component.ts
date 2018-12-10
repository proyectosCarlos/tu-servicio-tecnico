import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente'
import { ClienteService } from '../../services/cliente/cliente.service'
import { TecnicoService } from '../../services/tecnico/tecnico.service'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'abe-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.scss']
})
export class ListaclientesComponent implements OnInit {

  errorMsg:any
  nombre: String
  apellido:String
  telefono: String
  public searchText : string;
  dataSource:any
  estadoGarantia: Number

  constructor(private clienteservicio: ClienteService, private tecnicoServicio: TecnicoService, private modalService: NgbModal ) { }

  ngOnInit() {
    this.obtenerClientes()
  }

  obtenerClientes(){
    this.clienteservicio.obtenerClientes()
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
    .subscribe(res=>{
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

  actualizarerror(){
    this.estadoGarantia = 200;
  }

}
