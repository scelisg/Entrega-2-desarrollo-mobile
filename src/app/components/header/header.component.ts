import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    @Input() pageTitle;

  constructor(private navControler: NavController) { }

  //Navegaciones

  irClima(){
    this.navControler.navigateForward(['clima/']);
  }
  irConversor(){
    this.navControler.navigateForward(['conversor/']);
  }
  irRick(){
    this.navControler.navigateForward(['rick/']);
  }

  irSuscripcion(){
    this.navControler.navigateForward(['formulario']);
  }

  ngOnInit() {}

}
