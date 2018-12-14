import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Tecnico } from '../../models/tecnico'
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router'




@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  TecnicoRol: String
  Mensaje: String
  nombre: any
  tecId: any
  logging: boolean
  loggInStatus: any
  variablesIniciales: string[]

loginSesion: any
loginUserRol: any
tsttn: String
errorStatus: any




  TecnicoSeleccionado: Tecnico
  Tecnicos: Tecnico[]
  readonly URL_API = 'http://localhost:3000/api/tuservicio/tecnico'
  readonly loginUrl ='http://localhost:3000/api/tuservicio/tecnico/login'
  readonly updateUrl = 'http://localhost:3000/api/tuservicio/tecnico/actualizar'

  constructor(public http: HttpClient, public route: Router) {
    this.TecnicoSeleccionado = new Tecnico()
    this.logging = false
   }

   guardarTecnico(tecnico: Tecnico): Observable<any>{
    return this.http.post(this.URL_API, tecnico)
}

obtenerTecnicos(): Observable<Tecnico[]>{
  return this.http.get<Tecnico[]>(this.URL_API)
 .pipe(catchError(this.manejoError))
}

manejoError(error: HttpErrorResponse){
return Observable.throw(error.message || "Error servidor")
}

obtenertecnico(_id:string): Observable<Tecnico>{
  return this.http.get<Tecnico>(this.URL_API+ `/${_id}`)
 .pipe(catchError(this.manejoError))
}

loginUser(user): Observable<any>{
  return this.http.post<any>(this.loginUrl, user)
    }

LoggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  LogOut(){
    localStorage.removeItem('tstr')
    localStorage.removeItem('tstui')
    localStorage.removeItem('tstn')
    localStorage.removeItem('token')

    this.route.navigate(['/home'])
  }

  editarTecnico(tecnico:Tecnico){
    return this.http.put<any>(this.updateUrl + `/${tecnico._id}`, tecnico)

  }
// borraEmpleado(_id:string){
//   return this.http.delete(this.URL_API+ `/${_id}`)
// }

ComprobarSesionIniciada(){
  let variables:any[] = new Array()
  let user = localStorage.getItem('tstr')
  let usertec = localStorage.getItem('tstui')
  let tecname = localStorage.getItem('tstn')
  let token = localStorage.getItem('token')

  variables.push(user)
  variables.push(usertec)
  variables.push(tecname)
  variables.push(token)


  return variables


}


}
