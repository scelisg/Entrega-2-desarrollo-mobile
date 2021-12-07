import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  urlBase = 'https://api.openweathermap.org/data/2.5/weather?id=3873544&appid=a5d8dae760b5473bd55df721dd2ebd2d';

  constructor(private httpClient: HttpClient) { }

  obtenerClima(): Promise <any> {
    return new Promise ((resolve, reject) => {
      this.httpClient.get(this.urlBase)
      .subscribe(respuesta =>{
        resolve(respuesta);
      },(err) => {
        reject(err);
      });
    });
  };

}


// key: a5d8dae760b5473bd55df721dd2ebd2d
// id RM  3873544
