import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcularLitrosPageRoutingModule } from './calcular-litros-routing.module';

import { CalcularLitrosPage } from './calcular-litros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcularLitrosPageRoutingModule
  ],
  declarations: [CalcularLitrosPage]
})
export class CalcularLitrosPageModule {}
