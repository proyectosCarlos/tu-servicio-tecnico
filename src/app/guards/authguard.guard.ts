import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TecnicoService } from '../services/tecnico/tecnico.service'


@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor( public service: TecnicoService, public ruta: Router ){}

canActivate(): boolean{
  if(localStorage.getItem('tstr')==='1'){
    return true
  }else{
    this.ruta.navigate(['/home'])
    return false
  }
}
}
