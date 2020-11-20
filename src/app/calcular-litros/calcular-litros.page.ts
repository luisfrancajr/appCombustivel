import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Carro } from 'src/models/Carro';
import { CarroService } from 'src/services/CarroService';

@Component({
  selector: 'app-calcular-litros',
  templateUrl: './calcular-litros.page.html',
  styleUrls: ['./calcular-litros.page.scss'],
})
export class CalcularLitrosPage implements OnInit, OnDestroy {
  public distancia: number = 0;
  public carro_id: number;
  public combustivel: string = "1"; 
  public carros: Carro[] = new Array<Carro>();
  public quantidadeLitros: number = 0;

  constructor(private _carroService: CarroService, private _alert: AlertController) {
    console.log(this.carro_id);
  }

  ngOnDestroy(): void {
  }

  ionViewDidLeave() {    
    console.log('removeu os itens');
    this.carros = [];
    this.carro_id = undefined;
    this.distancia = 0;
    this.combustivel = "1";
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.buscarCarros();
  }

  async buscarCarros() {
    this.carros = await this._carroService.listar();
    console.log(this.carros);
  }

  buscarCarroPorId(carro_id) : Carro {
    return this.carros.find( carro => carro.id == carro_id );
  }

  fazerCalculoLitros() {
    const carro: Carro = this.buscarCarroPorId(this.carro_id);
    this.quantidadeLitros = this._carroService.calcularLitros(
      carro, 
      parseInt(this.combustivel), 
      this.distancia
    );
    console.log(this.quantidadeLitros);
    this.mostrarResultado(this.quantidadeLitros);
  }

  async mostrarResultado(resultado: number) {
    const alert = await this._alert.create({
        cssClass: 'alert-resultado',
        header: 'Quantidade de Litros',
        message: resultado.toString(),
        buttons: ['OK']
    });
    
    await alert.present();
  }


}
