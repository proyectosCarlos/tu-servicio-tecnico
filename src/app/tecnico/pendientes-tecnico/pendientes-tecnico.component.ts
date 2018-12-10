import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente'
import { Imagen } from '../../models/imagen'
import { ClienteService } from '../../services/cliente/cliente.service'
import { TecnicoService } from '../../services/tecnico/tecnico.service'
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import {ImagenesService} from '../../services/imagenes/imagenes.service'

import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'abe-pendientes-tecnico',
  templateUrl: './pendientes-tecnico.component.html',
  styleUrls: ['./pendientes-tecnico.component.scss']
})
export class PendientesTecnicoComponent implements OnInit {

  errorMsg:any
  nombre: String
  apellido:String
  telefono: String
  public searchText : string;
  dataSource:any
  userTec:string

  uploadProgress: Observable<number>;
  uploadURL: Observable<string>;
  imageUrl:any

  valorAtencion: Number







  constructor(private clienteservicio: ClienteService, private tecnicoServicio: TecnicoService ,
     private modalService: NgbModal, private _storage: AngularFireStorage , private imageService: ImagenesService ) {
    this.userTec = localStorage.getItem('tstui')
  }

  ngOnInit() {
    this.obtenerPendientes()
  }



  obtenerPendientes(){
    this.clienteservicio.obtenerPendientesTec(this.userTec)
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


  upload(event) {
    console.log("aqui")
    this.clienteservicio.clienteSeleccionado.valor = this.valorAtencion
    let cliente: Cliente = this.clienteservicio.clienteSeleccionado



    this.actualizarCliente(cliente)

   // console.log( this.clienteservicio.clienteSeleccionado._id)
    // Get input file
    const file = event.target.files[0];

    // Generate a random ID
    const randomId = Math.random().toString(36).substring(2);
    const filepath = `images/${randomId}`;

    const fileRef = this._storage.ref(filepath);

    // Upload image
    const task = this._storage.upload(filepath, file);


    // Observe percentage changes
    this.uploadProgress = task.percentageChanges();

    // Get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {this.uploadURL = fileRef.getDownloadURL()
        this.uploadURL.subscribe(url=>{this.imageUrl = url

      this.tomardatos(cliente._id, cliente.tecnico, randomId, this.imageUrl)
        })
      })

    ).subscribe();
  }



actualizarCliente(cliente:Cliente){
  this.imageService.editarCliente(cliente)
  .subscribe(res=>{},

     err=>{

     })
}

tomardatos(idcliente, idtecnico, nombre, url ){

 let imagenSeleccionada = new Imagen(idcliente,idtecnico,nombre, url)
 this.subirImagen(imagenSeleccionada)
}

subirImagen(imagen: Imagen){
  this.imageService.guardarImagen(imagen)
  .subscribe(res=>{
    this.obtenerPendientes()
  },
  err=>{
    this.obtenerPendientes()
  })
}

}
