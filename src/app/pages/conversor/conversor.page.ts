import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

  pageTitle: any = 'Conversor';
  datosConversor: any;
  valorDolar: any;
  valorEuro: any;
  cantidad: any;
  monedaDesde: any;
  monedaA: any;
  resultado: any;


  constructor( private conversorService: ConversorService) {
    this.listarDatosConversor();
    }

  listarDatosConversor() {
    this.conversorService.obtenerConversor()
    .then(respuesta=>{
      console.log(respuesta);
      this.datosConversor = respuesta;
      this.valorDolar = respuesta.dolar.valor;
      console.log(this.valorDolar);
      this.valorEuro = respuesta.euro.valor;
      console.log(this.valorEuro);
    },
    (error) =>{
      console.error(error);
    }
    );
  }

  convertirMoneda() {
    if (this.monedaDesde == 1 && this.monedaA == 2) {
      this.resultado = this.cantidad / this.valorDolar;
      this.resultado = this.resultado.toFixed(2);
    }
    if (this.monedaDesde == 1 && this.monedaA == 3) {
      this.resultado = this.cantidad / this.valorEuro;
      this.resultado = this.resultado.toFixed(2);
    }
    if (this.monedaDesde == 2 && this.monedaA == 1) {
      this.resultado = this.cantidad * this.valorDolar;
      this.resultado = this.resultado.toFixed(2);
    }
    if (this.monedaDesde == 3 && this.monedaA == 1) {
      this.resultado = this.cantidad * this.valorEuro;
      this.resultado = this.resultado.toFixed(2);
    }
    if (this.monedaDesde == 2 && this.monedaA == 3) {
      this.resultado = (this.cantidad * this.valorDolar) / this.valorEuro;
      this.resultado = this.resultado.toFixed(2);
    }
    if (this.monedaDesde == 3 && this.monedaA == 2) {
      this.resultado = (this.cantidad * this.valorEuro) / this.valorDolar;
      this.resultado = this.resultado.toFixed(2);
    }
    if (this.monedaDesde == this.monedaA) {
      console.log('Debe ingresar distintos tipos de moneda');
      this.resultado = 'Debe ingresar distintos tipos de moneda';
    }
    if (this.cantidad == null) {
      this.resultado = 'Debe ingresar la cantidad';
    }

    console.log(this.resultado);

  }

  ngOnInit() {

  }

}
