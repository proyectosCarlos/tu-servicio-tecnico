import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente'
import { Imagen } from '../../models/imagen'
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { Observable,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  readonly URL_API = 'http://localhost:3000/api/tuservicio/facturar'
  readonly URL_API_IMAGEN = 'http://localhost:3000/api/tuservicio/upload'
  readonly URL_API_GET_IMAGEN = 'http://localhost:3000/api/tuservicio/upload'


  imagenSeleccionada: Imagen
  Imagenes: Imagen[]

  constructor(private http: HttpClient) { }

  editarCliente(cliente:Cliente){
    return this.http.put<any>(this.URL_API + `/${cliente._id}`, cliente)
  }

  guardarImagen(imagen: Imagen){
    return this.http.post(this.URL_API_IMAGEN, imagen)
}

obtenerFacturas(dateInicio, dateFinal): Observable<Imagen[]>{
  return this.http.get<Imagen[]>(this.URL_API_GET_IMAGEN+ `/${dateInicio}/${dateFinal}`)
 .pipe(catchError(this.manejoError))
}

manejoError(error: HttpErrorResponse){
return Observable.throw(error.message || "Error servidor")
}


}


