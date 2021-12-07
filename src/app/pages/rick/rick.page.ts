import { Component, OnInit } from '@angular/core';
import { RickService } from 'src/app/services/rick.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-rick',
  templateUrl: './rick.page.html',
  styleUrls: ['./rick.page.scss'],
})
export class RickPage implements OnInit {

  pageTitle: any = 'Rick y morty';
  listadoCharacter: any;

  constructor(
    private rickService: RickService,
    private navControler: NavController
  ) {
    this.listarCharacter();
  }

  listarCharacter() {
    this.rickService.obtenerCharacter()
    .then(respuesta=>{
      console.log(respuesta);
      this.listadoCharacter = respuesta.results;
    },
    (error) =>{
      console.error(error);
    }
    );
  }

  obtenerDetallePerfil(character: any){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        character: JSON.stringify(character)
      }
    };
    this.navControler.navigateForward(['rick-perfil/'],navigationExtras);
  }

  ngOnInit() {
  }

}
