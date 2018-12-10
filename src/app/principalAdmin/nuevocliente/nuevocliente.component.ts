import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from '../../models/cliente'
import { ClienteService } from '../../services/cliente/cliente.service'
import { TecnicoService } from '../../services/tecnico/tecnico.service'
import { Tecnico } from '../../models/tecnico'



@Component({
  selector: 'abe-nuevocliente',
  templateUrl: './nuevocliente.component.html',
  styleUrls: ['./nuevocliente.component.scss'],
  providers: [ClienteService,TecnicoService]
})
export class NuevoclienteComponent implements OnInit {

tecnicos:Tecnico[]
confirmar: any
errorMsg:any




  constructor(private clienteservicio: ClienteService, private tecnicoServicio: TecnicoService) {

   }

  ngOnInit() {
    this.obtenerTecnicos()
  }



  guardarCliente(form: NgForm){

    this.clienteservicio.guardarCliente(form.value)
    .subscribe(res =>{
 this.confirmar = res['status']
 this.obtenerTecnicos()
 this.resetForm(form)


    })
  }

  resetForm(form?: NgForm){

    if(form){
      form.reset()
      this.clienteservicio.clienteSeleccionado = new Cliente()
    }
  }

  obtenerTecnicos(){
    this.tecnicoServicio.obtenerTecnicos()
    .subscribe(res =>  this.tecnicoServicio.Tecnicos = res as Tecnico[],
              error=> this.errorMsg = error)
  }



}
