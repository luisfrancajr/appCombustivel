import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarCarroPageRoutingModule } from './cadastrar-carro-routing.module';

import { CadastrarCarroPage } from './cadastrar-carro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarCarroPageRoutingModule
  ],
  declarations: [CadastrarCarroPage]
})
export class CadastrarCarroPageModule {}
