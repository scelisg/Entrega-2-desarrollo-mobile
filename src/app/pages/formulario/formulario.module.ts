import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormularioPageRoutingModule } from './formulario-routing.module';
import { ComponentsModule } from "src/app/components/components.module";
import { FormularioPage } from './formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [FormularioPage]
})
export class FormularioPageModule {}
