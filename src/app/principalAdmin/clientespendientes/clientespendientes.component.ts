import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente'
import { ClienteService } from '../../services/cliente/cliente.service'
import { TecnicoService } from '../../services/tecnico/tecnico.service'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'abe-clientespendientes',
  templateUrl: './clientespendientes.component.html',
  styleUrls: ['./clientespendientes.component.scss']
})
export class ClientespendientesComponent implements OnInit {

  errorMsg:any
  nombre: String
  apellido:String
  telefono: String
  public searchText : string;
  dataSource:any
  userTec:string

  constructor(public clienteservicio: ClienteService, public tecnicoServicio: TecnicoService , public modalService: NgbModal ) {

   }

  ngOnInit() {
    this.obtenerPendientes()
  }

  obtenerPendientes(){
    this.clienteservicio.obtenerPendientes(  )
    .subscribe(res =>  this.clienteservicio.pendientes = res as Cliente[],
              error=> this.errorMsg = error)
  }

  BuscarCliente(cliente: Cliente){

   this.clienteservicio.clienteSeleccionado = cliente

    this.tecnicoServicio.obtenertecnico(this.clienteservicio.clienteSeleccionado.tecnico)
    .subscribe(res=>{
      this.nombre = res['nombreTecnico']
      this.apellido = res['apellidoTecnico']
      this.telefono = res['telefonoTecnico']
    },
      err=>{
        console.log(err)
      })

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
