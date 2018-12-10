import { Component, OnInit } from '@angular/core';


import { Mensaje } from '../models/mensaje'
import { MensajeService } from '../services/mensajes/mensaje.service'



@Component({
  selector: 'abe-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']

})
export class ImagenesComponent  {


  contenido: string
  mensaje: Mensaje = new Mensaje()



  constructor(private servicio: MensajeService) { }

enviarMensaje(){
this.mensaje.contenido = this.contenido
this.mensaje.fecha = new Date().toDateString()
this.servicio.enviarMensaje(this.mensaje)
}

}
