import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tecnico } from '../../models/tecnico'
import { TecnicoService } from '../../services/tecnico/tecnico.service'

@Component({
  selector: 'abe-registro-tecnico',
  templateUrl: './registro-tecnico.component.html',
  styleUrls: ['./registro-tecnico.component.scss']
})
export class RegistroTecnicoComponent implements OnInit {

  confirmar: any

  constructor(public tecnicoServicio: TecnicoService) { }

  ngOnInit() {
  }

  guardarTecnico(form: NgForm){


     this.tecnicoServicio.guardarTecnico(form.value)
     .subscribe(
       res =>{
      this.resetForm(form)
      this.tecnicoServicio.Mensaje = res.error
      this.confirmar = res.status

     },
     err =>{
    this.tecnicoServicio.TecnicoRol = err.status
    this.tecnicoServicio.Mensaje = err.error
    this.confirmar = err.status
    this.resetForm(form)

    }
     )

  }


  resetForm(form?: NgForm){
    if(form){
      form.reset()
      this.tecnicoServicio.TecnicoSeleccionado = new Tecnico()
    }
  }

  imprimir(){
    console.log("hola")
  }

}
