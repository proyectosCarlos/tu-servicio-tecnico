import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Mensaje } from 'src/app/models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

listaMensajes: AngularFireList<any>
  constructor(public database: AngularFireDatabase) { }

  obtenerMensajes(tecnico){
 return this.listaMensajes = this.database.list(tecnico)
  }

  enviarMensaje(mensaje: Mensaje){
    this.listaMensajes.push({
      fecha: mensaje.fecha,
      contenido: mensaje.contenido
    })
  }
}



