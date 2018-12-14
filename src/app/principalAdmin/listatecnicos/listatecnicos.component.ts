import { Component, OnInit } from '@angular/core';
import { TecnicoService } from '../../services/tecnico/tecnico.service'
import { Tecnico } from '../../models/tecnico'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'abe-listatecnicos',
  templateUrl: './listatecnicos.component.html',
  styleUrls: ['./listatecnicos.component.scss']
})
export class ListatecnicosComponent implements OnInit {

  tecnicos: Tecnico[]
  errorMsg
  tecnico: Tecnico
  public searchText : string;
  dataSource:any
  TecnicoClassBtn: String


  constructor( public tecnicoServicio: TecnicoService, public  modalService: NgbModal) { }

  ngOnInit() {
    this.obtenerTecnicos()
  }

  obtenerTecnicos(){
    this.tecnicoServicio.obtenerTecnicos()
    .subscribe(res =>{  this.tecnicoServicio.Tecnicos = res as Tecnico[]
    },
              error=> this.errorMsg = error)
  }

//   BuscarTecnico(_id:string){
// this.tecnicoServicio.obtenertecnico(_id)
// .subscribe(res =>  this.tecnico= res,

//   error=> this.errorMsg = error)
// }

BuscarTecnico(tecnico: Tecnico){

  this.tecnicoServicio.TecnicoSeleccionado = tecnico

}


activarTecnico(tecnico: Tecnico){
 if(tecnico.estado== '0'){
tecnico.estado='1'
this.actualizarTecnico(tecnico)
 }else{
   tecnico.estado='0'
 this.actualizarTecnico(tecnico)
 }
}

actualizarTecnico(tecnico:Tecnico){
  this.tecnicoServicio.editarTecnico(tecnico)
  .subscribe(res=>{console.log(res)},
    err=>{console.log(err)})
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
