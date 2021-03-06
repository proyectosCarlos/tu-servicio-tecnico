import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { GraficaServiceService } from '../../services/grafica/grafica-service.service'
import {Cliente} from '../../models/cliente'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'abe-grafica-tecnico',
  templateUrl: './grafica-tecnico.component.html',
  styles: [`
  .dark-modal .modal-content {
    background-color: #292b2c;
    color: white;
  }
  .dark-modal .close {
    color: white;
  }
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
`]
})
export class GraficaTecnicoComponent implements OnInit {

  valorSeleccionado: number
  mesSeleccionado: number
  years: number[]
  TotalFactura: any

  lineChartData:Array<any>
  lineChartLabels:Array<any>
  lineChartOptions:any
  lineChartLegend:boolean = true;
  lineChartType:string = 'line';
  inicio: number =0
  fechaActual = new Date();
  anioActual = this.fechaActual.getFullYear();
  mesActual: number = this.fechaActual.getMonth()
  userTec: string

  constructor(public graficaService: GraficaServiceService, public modalService: NgbModal) {
    var fecha = new Date();
    this.valorSeleccionado =  fecha.getFullYear();
    this.lineChartLabels=['Ene', 'Feb ', 'Mar ', 'Abr','May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    this.lineChartOptions = {
      responsive: true
    };
    this.userTec = localStorage.getItem('tstui')
   }

  ngOnInit() {

    this.years=this.obtenerAños()


    this.graficaService.obtenerClientesTec(this.userTec, this.anioActual)
    .subscribe(res =>{
     this.graficaService.clientesAdmin = res as Cliente[]

     this.graficaService.Garantias = this.graficaService.ordenarGarantias(res)
     this.graficaService.Clientes = this.graficaService.ordenarClientes(res)
     this.graficaService.ClientesTotales = this.graficaService.ordenarClientesTotales(res)
    this.lineChartData= [
        {data: this.graficaService.Garantias, label: 'Garantias'},
        {data: this.graficaService.Clientes, label: 'Clientes Nuevos'},
        {data: this.graficaService.ClientesTotales, label: 'Clientes'}
      ];
    })
  }




  // // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  obtenerAños(): number[]{
    var fecha = new Date();
    var anio = fecha.getFullYear();
    let AnioInicial: number = 2017
    let AnioActual: Number = anio
    let anios: number[] = []

    while(AnioInicial<= AnioActual){
      anios.push(AnioInicial)
      AnioInicial++
    }


   return anios
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });

 }




ObtenerClientes(){
  this.graficaService.obtenerClientesTec(this.userTec, this.valorSeleccionado)
.subscribe(res =>{
 this.graficaService.clientesAdmin = res as Cliente[]

 this.graficaService.Garantias = this.graficaService.ordenarGarantias(res)
 this.graficaService.Clientes = this.graficaService.ordenarClientes(res)
 this.graficaService.ClientesTotales = this.graficaService.ordenarClientesTotales(res)
this.lineChartData= [
    {data: this.graficaService.Garantias, label: 'Garantias'},
    {data: this.graficaService.Clientes, label: 'Clientes Nuevos'},
    {data: this.graficaService.ClientesTotales, label: 'Clientes'}
  ];
})
}


obtenerFacturacion(){
  this.graficaService.obtenerFacturacionTec(this.valorSeleccionado, this.mesSeleccionado, this.userTec)
  .subscribe(res=>{
    if(res.length==0){
      this.TotalFactura = 0
    }else{
      this.TotalFactura = res[0].total
    }

  })

}


}
