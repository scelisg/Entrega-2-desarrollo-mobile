import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  pageTitle: any = 'Clima';
  datosClima: any;
  name: any;
  grados: any;
  gradosC: any;
  gradosMax: any;
  gradosMin: any;
  sensacion: any;
  windSpeed: any;
  humidity: any;

  constructor(private climaService: ClimaService) {
    this.listarDatosClima();

  }

  listarDatosClima() {
    this.climaService.obtenerClima()
    .then(respuesta=>{
      this.datosClima = respuesta;
      console.log(this.datosClima);
      this.name = respuesta.name;
      this.grados = Math.round(respuesta.main.temp -  273.15);
      this.gradosMax = Math.round(respuesta.main.temp_max -  273.15);
      this.gradosMin = Math.round(respuesta.main.temp_min -  273.15);
      this.sensacion = Math.round(respuesta.main.feels_like -  273.15);
      this.windSpeed = respuesta.wind.speed;
      this.humidity = respuesta.main.humidity;
      this.gradosC = respuesta.main.temp;
    },
    (error) =>{
      console.error(error);
    }
    );
  }



  ngOnInit() {
  }

}
