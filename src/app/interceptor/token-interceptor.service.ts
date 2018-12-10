import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { TecnicoService } from '../services/tecnico/tecnico.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req, next) {

    let servicioAuth =  this.injector.get(TecnicoService)
    let tokenizedReq = req.clone({
     setHeaders: {
       Authorization: `Bearer ${servicioAuth.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }

}
