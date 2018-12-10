

export class Tecnico {

  _id:string
  nombre: string
  apellido: string
  correo: any
  password: any
  telefono: any
  descripcion: any
  ciudad: string
  direccion: any
  codigoPostal: any
  estado: String



  constructor(_id= '',nombre='', apellido='', correo='', password='', telefono='',descripcion='',
   ciudad='', direccion='', codigoPostal='', estado=''){

   this._id = _id
   this.nombre = nombre
   this.apellido = apellido
   this.correo = correo
   this.password = password
   this.telefono = telefono
   this.descripcion = descripcion
   this.ciudad = ciudad
   this.direccion = direccion
   this.codigoPostal = codigoPostal
   this.estado = estado


  }
}

