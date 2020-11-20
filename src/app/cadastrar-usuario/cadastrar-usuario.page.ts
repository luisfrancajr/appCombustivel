import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/services/UsuarioService';
import { Usuario } from 'src/models/Usuario';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {

  public usuario: Usuario = new Usuario();
  constructor(private _usuarioService: UsuarioService, 
    private _menu: MenuController, private _router: Router) {
    console.log(this.usuario); 
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('O menu foi bloqueado.');
    // bloqueando o menu lateral ao construir a view
    this._menu.swipeGesture(false);
  }

  criarUsuario() {
    console.log(this.usuario);
    this._usuarioService.cadastrar(this.usuario).subscribe(usuario => {
      console.log(usuario);
      // direcionar para o login
      this._router.navigate(['/login']);
    })
  }

}
