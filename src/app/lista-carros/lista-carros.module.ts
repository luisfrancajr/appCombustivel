import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCarrosPageRoutingModule } from './lista-carros-routing.module';

import { ListaCarrosPage } from './lista-carros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCarrosPageRoutingModule
  ],
  declarations: [ListaCarrosPage]
})
export class ListaCarrosPageModule {}
