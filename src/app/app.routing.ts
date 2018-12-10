import { ModuleWithProviders} from '@angular/core'
import { Routes, RouterModule} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { PrincipalComponent } from './principal/principal.component'
import { FacturacionComponent } from './facturacion/facturacion.component'
import { AvisosComponent } from './avisos/avisos.component'
import { RegistroTecnicoComponent } from './tecnico/registro-tecnico/registro-tecnico.component'
import { TecnicoPrincipalComponent } from './tecnico-principal/tecnico-principal.component'
import { AuthguardGuard } from './guards/authguard.guard'
import { TecAuthGuard} from './guards/tec-auth.guard'
import { ImagenesComponent} from './imagenes/imagenes.component'



const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'principal', component: PrincipalComponent, canActivate:[AuthguardGuard]},
  {path: 'facturacion', component: FacturacionComponent},
  {path: 'avisos', component: AvisosComponent},
  {path: 'imagenes', component: ImagenesComponent},
  {path: 'registro', component: RegistroTecnicoComponent},
  {path: 'tecnico', component: TecnicoPrincipalComponent, canActivate:[TecAuthGuard]},
  {path: '**', component: HomeComponent},

]

export const appRoutingProviders: any[]= []

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)

