import { Injectable } from '@angular/core';
import {Cliente} from '../../models/cliente'
import { Observable } from 'rxjs';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GraficaServiceService {
clientesAdmin: Cliente[]
Garantias: number[]
Clientes: number[]
ClientesTotales: number[]

readonly URL_API_CLIENTES_GRAFICA_ADMIN = 'http://localhost:3000/api/tuservicio//clientes/graficaAdmin'
readonly URL_API_FACTURACION_ADMIN = 'http://localhost:3000/api/tuservicio/clientes/factura'


//urls graficas tecnico

readonly URL_API_FACTURACION_TEC = 'http://localhost:3000/api/tuservicio/clientes/facturaTec'
readonly URLAPI_CLIENTES_GRAFICATEC = 'http://localhost:3000/api/tuservicio/clientes/graficaTec'




  constructor(  public http: HttpClient) { }


  obtenerClientes(year:number): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.URL_API_CLIENTES_GRAFICA_ADMIN+ `/${year}`)
   .pipe(catchError(this.manejoError))
  }


  manejoError(error: HttpErrorResponse){
    return Observable.throw(error.message || "Error servidor")
    }

//ordena todas las garantias mes a  mes y los guarda en un arreglo
    ordenarGarantias(respuesta){
      let tamañoRespuesta = respuesta.length
      let i = 0;
      let garantias: number[]= [0,0,0,0,0,0,0,0,0,0,0,0]
      while(i<tamañoRespuesta){
        if(!(respuesta[i].fechaGarantia > 0)){
          i++;
        }else{
          garantias[(respuesta[i].fecha.month)-1] = garantias[(respuesta[i].fecha.month)-1] + 1

          i++;
        }
      }
      return garantias
    }
//ordena todos los clientes atendidos satisfactoriamente y los guarda en un arreglo de cada mes
    ordenarClientes(respuesta){
      let tamañoRespuesta = respuesta.length
      let i = 0;
      let clientes: number[]= [0,0,0,0,0,0,0,0,0,0,0,0]
      while(i<tamañoRespuesta){
        if(!(respuesta[i].estado == "1")){
          i++;
        }else{
          clientes[(respuesta[i].fecha.month)-1] = clientes[(respuesta[i].fecha.month)-1] + 1
          i++;
        }
      }
      return clientes
    }

    //ordena todos los clientes que se registraron cada mes
    ordenarClientesTotales(respuesta){
      let tamañoRespuesta = respuesta.length
      let i = 0;
      let clientes: number[]= [0,0,0,0,0,0,0,0,0,0,0,0]
      while(i<tamañoRespuesta){
          clientes[(respuesta[i].fecha.month)-1] = clientes[(respuesta[i].fecha.month)-1] + 1
          i++;
        }
      return clientes
    }

    obtenerFacturacion(year:number, month: number): Observable<any[]>{
      return this.http.get<any[]>(this.URL_API_FACTURACION_ADMIN+ `/${year}/${month}` )
     .pipe(catchError(this.manejoError))
    }



//llamado urls tecnico
  obtenerClientesTec(id:string, year:number): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.URLAPI_CLIENTES_GRAFICATEC+ `/${id}/${year}`)
   .pipe(catchError(this.manejoError))
  }

  obtenerFacturacionTec(year:number, month: number, id: string): Observable<any[]>{
    return this.http.get<any[]>(this.URL_API_FACTURACION_TEC+ `/${year}/${month}/${id}` )
   .pipe(catchError(this.manejoError))
  }


}
