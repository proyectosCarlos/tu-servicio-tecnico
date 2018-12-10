export class Cliente {

  _id:string
  electrodomestico: string
  correo: any
  descripcion: any
  nombre: string
  apellido: string
  telefono: any
  ciudad: string
  direccion: any
  codigoPostal: any
  fecha: any
  tecnico: string
  estado: string
  valor: any


  constructor(_id= '', electrodomestico='',correo='',descripcion='',nombre='', apellido='',
  telefono='', ciudad='', direccion='', codigoPostal='', fecha='', tecnico='', estado='', valor=''){

   this._id = _id
   this.electrodomestico = electrodomestico
   this.correo = correo
   this.descripcion = descripcion
   this.nombre = nombre
   this.apellido = apellido
   this.telefono = telefono
   this.ciudad = ciudad
   this.direccion = direccion
   this.codigoPostal = codigoPostal
   this.fecha = fecha
   this.tecnico = tecnico
   this.estado = estado
   this.valor = valor


  }
}
