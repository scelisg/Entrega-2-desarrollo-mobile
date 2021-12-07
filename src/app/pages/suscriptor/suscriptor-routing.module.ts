import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuscriptorPage } from './suscriptor.page';

const routes: Routes = [
  {
    path: '',
    component: SuscriptorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuscriptorPageRoutingModule {}
