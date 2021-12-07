import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RickPerfilPage } from './rick-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: RickPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickPerfilPageRoutingModule {}
