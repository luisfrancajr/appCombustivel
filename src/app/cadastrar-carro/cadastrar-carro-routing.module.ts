import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarCarroPage } from './cadastrar-carro.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarCarroPageRoutingModule {}
