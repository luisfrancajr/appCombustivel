import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/models/Carro';
import { CarroService } from 'src/services/CarroService';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.page.html',
  styleUrls: ['./lista-carros.page.scss'],
})
export class ListaCarrosPage implements OnInit, OnDestroy {
  public carros: Carro[] = new Array<Carro>();
  constructor(private _router: Router, private _carroService: CarroService) { 
  }

  ngOnDestroy(): void {
    console.log('Limpou os carros');
    this.carros = [];
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.obterCarros();
  }

  async obterCarros() {
    const listaCarros = await this._carroService.listar();
    this.carros = listaCarros;
    console.log(this.carros);
  }

  cadastrarCarro() {
    this._router.navigate(['/cadastrar-carro']);
  }

  visualizarCarro(carro_id: Number) {
    this._router.navigate([`/carro/${carro_id}`]);
  }

}
