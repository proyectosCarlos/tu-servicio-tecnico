import { Component, OnInit } from '@angular/core';
import { TecnicoService }  from './services/tecnico/tecnico.service'
import { Router}  from '@angular/router'
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  LoginUserData= {}
  mensaje: String
  classModelForm: String
  classModelSesion: String

  //localstorage
sesion: any[] = new Array()




  constructor(private servicio: TecnicoService, private ruta: Router, private modalService: NgbModal){

  }

  ngOnInit(): void {
    this.comprobarSesionIniciada()
  }

comprobarSesionIniciada(){
  this.sesion = this.servicio.ComprobarSesionIniciada()
  if(this.sesion[0] == null){
    this.classModelForm = 'col-md-5 offset-6'
    this.classModelSesion = 'col-md-1 offset-11'


  }else{
    this.servicio.loginUserRol = localStorage.getItem('tstr')
    this.servicio.tsttn = localStorage.getItem('tstn')


    if(this.servicio.loginUserRol == '1'){
      this.classModelForm = 'col-md-3 offset-0'
      this.classModelSesion = 'col-md-2 offset-4'
      this.ruta.navigate(['/principal'])

    }else{
      console.log(this.servicio.tsttn)
      this.classModelForm = 'col-md-3 offset-0'
      this.classModelSesion = 'col-md-2 offset-10'
      this.ruta.navigate(['/tecnico'])

    }

  }
}



  loginUser(){
    this.servicio.loginUser(this.LoginUserData)
    .subscribe(
      res=> {

        //let estado = res['tecname']
        localStorage.setItem('tstr', res['user'] )
        localStorage.setItem('tstui', res['usertec'] )
        localStorage.setItem('tstn', res['tecname'] )
        localStorage.setItem('token', res['token'] )
        this.servicio.loginUserRol = localStorage.getItem('tstr')
        this.servicio.tsttn = localStorage.getItem('tstn')
        this.servicio.errorStatus=''


        if(this.servicio.loginUserRol == '1'){
          this.classModelForm = 'col-md-3 offset-0'
          this.classModelSesion = 'col-md-2 offset-4'
          this.ruta.navigate(['/principal'])

        }else{
          this.classModelForm = 'col-md-3 offset-0'
          this.classModelSesion = 'col-md-2 offset-10'
          this.ruta.navigate(['/tecnico'])

        }

      },
      err =>{
        this.servicio.errorStatus=err.status
        this.mensaje = err.error
        console.log(typeof(this.servicio.errorStatus))

      }
    )

  }

  onSearchChange() {
    this.servicio.errorStatus = ''}


  cerrarSesion(){

    this.servicio.LogOut()

  }


}
