import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders} from './app.routing'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { FacturacionComponent } from './facturacion/facturacion.component';
import { AvisosComponent } from './avisos/avisos.component';


import { ChartsModule } from 'ng2-charts';
import { GraficaComponent } from './grafica/grafica.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NuevoclienteComponent } from './principalAdmin/nuevocliente/nuevocliente.component';
import { ListaclientesComponent } from './principalAdmin/listaclientes/listaclientes.component';
import { ClientespendientesComponent } from './principalAdmin/clientespendientes/clientespendientes.component';
import { GarantiasComponent } from './principalAdmin/garantias/garantias.component';
import { NuevotecnicoComponent } from './principalAdmin/nuevotecnico/nuevotecnico.component';
import { ListatecnicosComponent } from './principalAdmin/listatecnicos/listatecnicos.component';
import { TecnicoPrincipalComponent } from './tecnico-principal/tecnico-principal.component'

import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { ModaltecnicoComponent } from './Modals/modaltecnico/modaltecnico.component';
import { RegistroTecnicoComponent } from './tecnico/registro-tecnico/registro-tecnico.component';
import { FiltroPipe } from './pipes/filtro.pipe';

import {AuthguardGuard } from './guards/authguard.guard';
import {TecAuthGuard } from './guards/tec-auth.guard';

import { TokenInterceptorService } from './interceptor/token-interceptor.service';
import { GraficaTecnicoComponent } from './tecnico/grafica-tecnico/grafica-tecnico.component';
import { ClientesTecnicoComponent } from './tecnico/clientes-tecnico/clientes-tecnico.component';
import { PendientesTecnicoComponent } from './tecnico/pendientes-tecnico/pendientes-tecnico.component';
import { ImagenesComponent } from './imagenes/imagenes.component'

import { FileSelectDirective } from 'ng2-file-upload';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatProgressBarModule } from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { GarantiasTecnicoComponent } from './tecnico/garantias-tecnico/garantias-tecnico.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent,
    FacturacionComponent,
    AvisosComponent,
    GraficaComponent,
    NuevoclienteComponent,
    ListaclientesComponent,
    ClientespendientesComponent,
    GarantiasComponent,
    NuevotecnicoComponent,
    ListatecnicosComponent,
    ModaltecnicoComponent,
    RegistroTecnicoComponent,
    FiltroPipe,
    TecnicoPrincipalComponent,
    GraficaTecnicoComponent,
    ClientesTecnicoComponent,
    PendientesTecnicoComponent,
    ImagenesComponent,
    FileSelectDirective,
    GarantiasTecnicoComponent

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ChartsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,

    //firestore

    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,

    /** Angular Firebase Modules */
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule

   ],
  providers: [appRoutingProviders, AuthguardGuard, TecAuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true

  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
