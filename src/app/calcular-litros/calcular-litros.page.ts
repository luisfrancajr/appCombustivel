import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/models/Carro';
import { CarroService } from 'src/services/CarroService';

@Component({
  selector: 'app-calcular-litros',
  templateUrl: './calcular-litros.page.html',
  styleUrls: ['./calcular-litros.page.scss'],
})
export class CalcularLitrosPage implements OnInit {
  public distancia: number = 0;
  public carro_id: number;
  public combustivel: string = "1"; 
  public carros: Carro[] = new Array<Carro>();

  constructor(private _carroService: CarroService) {
    this.buscarCarros();
  }

  ngOnInit() {
  }

  async buscarCarros() {
    this.carros = await this._carroService.listar();
    console.log(this.carros);
  }

  fazerCalculoLitros() {
    console.log(this.distancia);
    console.log(this.carro_id);
    console.log(this.combustivel);
  }


}
