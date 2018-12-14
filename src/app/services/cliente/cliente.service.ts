import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { Cliente } from '../../models/cliente'
import { Tecnico } from '../../models/tecnico'
import { Observable,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clienteSeleccionado: Cliente
  clientes: Cliente[]
  tecnicos:Tecnico[]
  garantias: Cliente[]
  pendientes:Cliente[]

  //urls clientes para el admin
  readonly URL_API = 'http://localhost:3000/api/tuservicio'
  readonly URL_API_GARANTIAS = 'http://localhost:3000/api/tuservicio/garantias'
  readonly URL_API_PENDIENTES = 'http://localhost:3000/api/tuservicio/pendientes'
  readonly URL_API_EDIT = 'http://localhost:3000/api/tuservicio/actualizar'


  //urls clientes para el tecnico
  readonly URL_API_CLIENTES_TEC = 'http://localhost:3000/api/tuservicio/clientes/tecnico'
  readonly URL_API_GARANTIAS_TEC = 'http://localhost:3000/api/tuservicio/garantias/tecnico'
  readonly URL_API_PENDIENTES_TEC = 'http://localhost:3000/api/tuservicio/pendientes/tecnico'



  constructor(  public http: HttpClient) {
    this.clienteSeleccionado = new Cliente()
   }

   guardarCliente(cliente: Cliente){
      return this.http.post(this.URL_API, cliente)
  }


  obtenerGarantias(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.URL_API_GARANTIAS)
   .pipe(catchError(this.manejoError))
  }

  manejoError(error: HttpErrorResponse){
  return Observable.throw(error.message || "Error servidor")
  }

  obtenerClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.URL_API)
   .pipe(catchError(this.manejoError))
  }

  obtenerPendientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.URL_API_PENDIENTES)
   .pipe(catchError(this.manejoError))
  }

  editarCliente(cliente:Cliente){
    return this.http.put<any>(this.URL_API_EDIT + `/${cliente._id}`, cliente)

  }



  //metodos crud tecnico

  obtenerClientesTec(id:string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.URL_API_CLIENTES_TEC+`/${id}` )
   .pipe(catchError(this.manejoError))
  }

  obtenerGarantiasTec(id:string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.URL_API_GARANTIAS_TEC+`/${id}`)
   .pipe(catchError(this.manejoError))
  }

  obtenerPendientesTec(id:string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.URL_API_PENDIENTES_TEC+`/${id}`)
   .pipe(catchError(this.manejoError))
  }



}
