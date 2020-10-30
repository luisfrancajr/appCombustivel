import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/models/Carro';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.page.html',
  styleUrls: ['./lista-carros.page.scss'],
})
export class ListaCarrosPage implements OnInit {
  public carros: Carro[] = new Array<Carro>();
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  cadastrarCarro() {
    this._router.navigate(['/cadastrar-carro']);
  }

}
