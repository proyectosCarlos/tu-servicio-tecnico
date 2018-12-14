import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tecnico } from '../../models/tecnico'
import { TecnicoService } from '../../services/tecnico/tecnico.service'

@Component({
  selector: 'abe-nuevotecnico',
  templateUrl: './nuevotecnico.component.html',
  styleUrls: ['./nuevotecnico.component.scss'],
  providers:[TecnicoService]
})
export class NuevotecnicoComponent implements OnInit {

  confirmar: any

  constructor(public tecnicoServicio: TecnicoService) { }

  ngOnInit() {
  }

  guardarTecnico(form: NgForm){

    console.log(form.value)
    this.tecnicoServicio.guardarTecnico(form.value)
    .subscribe(res =>{
      this.confirmar = res['status']
      this.resetForm(form)
    })

  }


  resetForm(form?: NgForm){
    if(form){
      form.reset()
      this.tecnicoServicio.TecnicoSeleccionado = new Tecnico()
    }
  }

}
