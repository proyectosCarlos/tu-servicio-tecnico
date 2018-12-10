import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente/cliente.service'
import { Cliente } from '../../models/cliente'
import { TecnicoService } from '../../services/tecnico/tecnico.service'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ImagenesService} from '../../services/imagenes/imagenes.service'

@Component({
  selector: 'abe-garantias-tecnico',
  templateUrl: './garantias-tecnico.component.html',
  styleUrls: ['./garantias-tecnico.component.scss']
})
export class GarantiasTecnicoComponent implements OnInit {

  errorMsg: any
  nombre: String
  apellido:String
  telefono: String
  public searchText : string;
  dataSource:any
  userTec:string

  constructor(private clienteServicio:ClienteService, private tecnicoServicio: TecnicoService, private modalService: NgbModal,  private imageService: ImagenesService ) {
    this.userTec = localStorage.getItem('tstui')
   }

  ngOnInit() {
    this.obtenerGarantias()
  }
  obtenerGarantias(){
    this.clienteServicio.obtenerGarantiasTec(this.userTec)
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

  actualizarCliente(cliente:Cliente){
    this.imageService.editarCliente(cliente)
    .subscribe(res=>{ this.obtenerGarantias()},

       err=>{

       })
  }

  a(){
    console.log('bien')
  }
}
