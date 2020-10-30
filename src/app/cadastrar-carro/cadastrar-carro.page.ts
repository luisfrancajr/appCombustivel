import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/models/Carro';
import { CarroService } from 'src/services/CarroService';

@Component({
  selector: 'app-cadastrar-carro',
  templateUrl: './cadastrar-carro.page.html',
  styleUrls: ['./cadastrar-carro.page.scss'],
})
export class CadastrarCarroPage implements OnInit {
  public carro: Carro = new Carro();
  constructor(public _carroService: CarroService) {
  }

  ngOnInit() {
  }

  cadastrarCarro() {
    this._carroService.cadastrar(this.carro).subscribe(res => {
      console.log(res);
    });
  }

}
