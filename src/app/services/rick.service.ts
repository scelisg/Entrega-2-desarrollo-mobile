import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickService {

  urlBase = 'https://rickandmortyapi.com/api/character/';

  constructor(private httpClient: HttpClient) { }

  obtenerCharacter(): Promise <any> {
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

//https://rickandmortyapi.com/api/character
