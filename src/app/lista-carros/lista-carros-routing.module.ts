import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCarrosPage } from './lista-carros.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCarrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCarrosPageRoutingModule {}
