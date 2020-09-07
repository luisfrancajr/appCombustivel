import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcularLitrosPage } from './calcular-litros.page';

const routes: Routes = [
  {
    path: '',
    component: CalcularLitrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcularLitrosPageRoutingModule {}
