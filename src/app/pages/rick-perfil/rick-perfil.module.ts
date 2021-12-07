import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RickPerfilPageRoutingModule } from './rick-perfil-routing.module';

import { RickPerfilPage } from './rick-perfil.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RickPerfilPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RickPerfilPage]
})
export class RickPerfilPageModule {}
