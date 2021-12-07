import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickService } from '../../services/rick.service';

@Component({
  selector: 'app-rick-perfil',
  templateUrl: './rick-perfil.page.html',
  styleUrls: ['./rick-perfil.page.scss'],
})
export class RickPerfilPage implements OnInit {

  character: any;
  pageTitle: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params =>{
      this.character = JSON.parse(params.character);
    });
  }

  ngOnInit() {
    console.log(this.character);
    this.pageTitle = this.character.name;
  }

}
