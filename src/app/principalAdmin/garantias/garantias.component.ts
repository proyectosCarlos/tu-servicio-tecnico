import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente/cliente.service'
import { Cliente } from '../../models/cliente'
import { TecnicoService } from '../../services/tecnico/tecnico.service'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'abe-garantias',
  templateUrl: './garantias.component.html',
  styleUrls: ['./garantias.component.scss']
})
export class GarantiasComponent implements OnInit {

  errorMsg: any
  nombre: String
  apellido:String
  telefono: String
  public searchText : string;
  dataSource:any

  constructor( public clienteServicio:ClienteService,  public tecnicoServicio: TecnicoService, public modalService: NgbModal ) { }

  ngOnInit() {
    this.obtenerGarantias()
  }
  obtenerGarantias(){
    this.clienteServicio.obtenerGarantias()
    .subscribe(res =>{
      this.clienteServicio.garantias = res as Cliente[]
    } ,
              error=> this.errorMsg = error)
  }


  BuscarCliente(cliente: Cliente){
    this.clienteServicio.clienteSeleccionado = cliente
    this.tecnicoServicio.obtenertecnico(this.clienteServicio.clienteSeleccionado.tecnico)
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

