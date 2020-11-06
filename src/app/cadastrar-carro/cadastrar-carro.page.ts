import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Carro } from 'src/models/Carro';
import { CarroService } from 'src/services/CarroService';

@Component({
  selector: 'app-cadastrar-carro',
  templateUrl: './cadastrar-carro.page.html',
  styleUrls: ['./cadastrar-carro.page.scss'],
})
export class CadastrarCarroPage implements OnInit {
  public carro: Carro = new Carro();
  private _htmlLoading: HTMLIonLoadingElement;
  constructor(
    public _carroService: CarroService, 
    private _router: Router,
    private _loading: LoadingController
  ) {
  }

  ngOnInit() {
  }

  async carregando() {
    // criar o loading
    this._htmlLoading = await this._loading.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...'
    });

    await this._htmlLoading.present();
  }

  cadastrarCarro() {
    this.carregando();
    this._carroService.cadastrar(this.carro).subscribe(res => {
      console.log(res);
      this._htmlLoading.dismiss();
      this._router.navigate(['/lista-carros']);
    });
  }

}
