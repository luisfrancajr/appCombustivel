import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/services/UsuarioService';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {

  constructor(private _usuarioService: UsuarioService) {
  }

  ngOnInit() {
  }

}
